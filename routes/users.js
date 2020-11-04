var express = require('express');
var router = express.Router();

const multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const userController = require('../controllers/userController')
const imgController = require('../controllers/cloudinaryController')


router.route('/new').post(userController.newUser);

router.route('/imagen')
    .post(upload.single('image'), imgController, userController.addImgUser);
module.exports = router;