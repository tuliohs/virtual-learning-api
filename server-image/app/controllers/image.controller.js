"use strict";

/**
 * New Image Thumbnail Generation
 */
const sharp = require('sharp');

/**
 * An end point for managing file uploads.
 */
const Image = require("../models/image.model.js");
const responses = require("../config/strings").responses;
const constants = require("../config/constants.js");
//const thumbnail = require("@courselit/thumbnail");
const path = require("path");
const fs = require("fs");
const {
    foldersExist,
    uniqueFileNameGenerator,
    moveFile,
    convertToWebp,
    createFolders,
} = require("../lib/utils.js");
const {
    uploadFolder,
    webpOutputQuality,
    useWebp,
    domainName,
    imageServerUrl
} = require("../config/constants.js")
const { getMediaOrThrow } = require("../lib/graphql");

exports.getHandler = async (req, res) => {
    const image = await Image.findOne({
        _id: req.params.imageId,
        //POR ENQUANTO NÃO SERÁ
        //domain: req.domain._id,
    });

    if (!image) {
        return res.status(404).json({ message: responses.item_not_found });
    }

    const { uploadFolderForDomain, thumbFolderForDomain } = generateFolderPaths({
        uploadFolder,
        domainName: domainName,
    });
    const { thumb } = req.query;

    if (thumb === "1") {
        if (image.thumbnail) {
            res.contentType(useWebp ? "image/webp" : "image/jpeg");
            res.sendFile(`${thumbFolderForDomain}/${image.thumbnail}`);
        } else {
            res.status(200).json({ message: responses.no_thumbnail });
        }
    } else {
        res.contentType(image.mimeType);
        res.sendFile(`${uploadFolderForDomain}/${image.fileName}`);
    }
}

exports.postHandler = async (req, res) => {
    //checando permissões
    //if (
    //    !checkPermission(req.user.permissions, [constants.permissions.uploadImage])
    //) {
    //    return res.status(400).json({ message: responses.action_not_allowed });
    //}

    try {

        const data = req.body;
        if (!data.title) {
            return res.status(400).json({ message: responses.title_is_required });
        }
        if (!req.files || !req.files.file) {
            return res.status(400).json({ message: responses.file_is_required });
        }

        const thumbnailExtension = useWebp ? "webp" : "jpg";

        const { uploadFolderForDomain, thumbFolderForDomain } = generateFolderPaths({
            uploadFolder,
            domainName: domainName,
        });
        if (!foldersExist([uploadFolderForDomain])) {
            createFolders([uploadFolderForDomain]);
        }
        if (!foldersExist([thumbFolderForDomain])) {
            createFolders([thumbFolderForDomain]);
        }

        const imagePattern = /image/;

        // create unique file name for the uploaded file
        const fileName = uniqueFileNameGenerator(req.files.file.name);
        const filePath = path.join(
            uploadFolderForDomain,
            `${fileName.name}.${useWebp && imagePattern.test(req.files.file.mimetype)
                ? "webp"
                : fileName.ext
            }`
        );

        // move the uploaded file to the upload folder

        await moveFile(req.files.file, filePath);
        if (useWebp && imagePattern.test(req.files.file.mimetype)) {
            await convertToWebp(filePath, webpOutputQuality);
        }

        // generate thumbnails for videos and images
        const thumbPath = `${thumbFolderForDomain}/${fileName.name}.${thumbnailExtension}`;
        let isThumbGenerated = false; // to indicate if the thumbnail name is to be saved to the DB

        if (imagePattern.test(req.files.file.mimetype)) {
            sharp(req.files.file.data).resize(constants.thumbnailWidth, constants.thumbnailHeight)
                .toFile(thumbPath
                    , (err, resizeImage) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(resizeImage);
                        }
                    }
                );

            if (useWebp) {
                await convertToWebp(thumbPath);
            }
            isThumbGenerated = true;
        }

        const imageObject = {
            //BUSCAR O ID DA COMPANIA AUTOMATICAMENTE
            title: data.title,
            originalFileName: req.files.file.name,
            fileName: `${fileName.name}.${useWebp && imagePattern.test(req.files.file.mimetype)
                ? "webp"
                : fileName.ext
                }`,
            creatorId: data?.userId || 'notInformated',
            mimeType:
                useWebp && imagePattern.test(req.files.file.mimetype)
                    ? "image/webp"
                    : req.files.file.mimetype,
            size: req.files.file.size,
        };
        //adiciona o nome da miniatura
        if (isThumbGenerated) imageObject.thumbnail = `${fileName.name}.${thumbnailExtension}`
        //adiciona o alt Text
        if (data.altText) imageObject.altText = data.altText;


        const image = await Image.create(imageObject);

        const url = `${imageServerUrl}/${image._id}`
        const imageUpdated = await Image.findOneAndUpdate({ _id: image._id.toString() }, {
            ...imageObject,
            url
        });
        console.log('imageUpdated', imageUpdated)
        return res.status(200).json({
            message: responses.success,
            image: {
                id: image.id,
                title: imageObject.title,
                mimeType: imageObject.mimeType,
                url
            },
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.deleteHandler = async (req, res) => {
    let image;

    try {
        image = await getMediaOrThrow(req.params.imageId, req);
    } catch (err) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    const { uploadFolderForDomain, thumbFolderForDomain } = generateFolderPaths({
        uploadFolder,
        domainName: domainName,
    });

    try {
        if (image.thumbnail) {
            fs.unlinkSync(`${thumbFolderForDomain}/${image.thumbnail}`);
        }
        fs.unlinkSync(`${uploadFolderForDomain}/${image.fileName}`);
        await Image.deleteOne({ _id: image.id });

        return res.status(200).json({ message: responses.success });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

function generateFolderPaths({ uploadFolder, domainName }) {
    const uploadRootFolderForDomain = `${uploadFolder}/${domainName}`;
    const uploadFolderForDomain = `${uploadRootFolderForDomain}/files`;
    const thumbFolderForDomain = `${uploadRootFolderForDomain}/thumbs`;
    return { uploadFolderForDomain, thumbFolderForDomain };
}
