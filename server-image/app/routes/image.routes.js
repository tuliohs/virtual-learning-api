const router = require('express').Router()

const imageController = require("../controllers/image.controller");
const authorize = require('../middlewares/auth').verifyJwt

router.get("/:imageId", imageController.getHandler);
router.post("/",/* authorize,*/ imageController.postHandler);
router.delete("/:imageId",/* authorize,*/ imageController.deleteHandler);

// export
module.exports = router