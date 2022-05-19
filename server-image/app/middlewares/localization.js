exports.localize = async (req, res, next) => {
    if (!req?.headers?.language)
        req.i18n.changeLanguage('en')
    else {
        const lng = req?.headers?.language
        req.i18n.changeLanguage(lng)
    }
    return next()
}