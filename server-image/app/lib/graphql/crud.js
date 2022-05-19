const express = require('express');
const strings = require("../../config/strings.js");
const mongoose = require('mongoose')

const { itemsPerPage } = require("../../config/constants.js");
const {
    makeModelTextSearchable,
    validateOffset,
} = require(".");

// ======
// Create
// ======
exports.create = (Collection,
    params = { modelField: null, reqField: null },
    data, ctx) => {
    let newEntry = data
    if (params?.reqField && params?.modelField)
        newEntry = { ...newEntry, [params?.modelField]: ctx[params?.reqField] }
    Collection.create(newEntry, (e, newEntry) => {
        if (e) {
            console.log(e);
            //res.sendStatus(500);
            return { message: e?.message }
        } else {
            return newEntry
        }
    });
};
// ======
// UPDATE
// ======
exports.update = async (Collection,
    params = { modelField: null, reqField: null }, data, ctx) => {


    let el = await Collection.findOne({ _id: data.id })
    if (!el) { throw new Error(strings.responses.item_not_found) }

    for (const key of Object.keys(data)) {
        //if (
        //  key === "published" &&
        //  !checkPermission(ctx.user.permissions, [permissions.publishCourse])
        //) {
        //  throw new Error(strings.responses.action_not_allowed);
        //}
        if (el[key]?.isMongooseArray)
            el[key] = data[key][0].split(',')
        else el[key] = data[key]
    }
    el = await el.save()
    return el;

};

// ======
// SEARCH by Offset
// ======
exports.search = async (Collection, offset, ctx, text, params) => {

    validateOffset(offset);
    let query = {}
    if (params?.modelField && params?.reqField)
        query = { [params?.modelField]: ctx[params?.reqField] }

    if (text) query.$text = { $search: text };
    const searchMedia = makeModelTextSearchable(Collection);

    return searchMedia(
        { offset, query, graphQLContext: ctx },
        {
            itemsPerPage,
            sortByColumn: "_id",
            sortOrder: -1,
        }
    );
};
