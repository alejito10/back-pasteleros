var express = require("express");
var router = express.Router();

const productosController = require('../controllers/productoController');

router.route('/new')
    .post(productosController.newProducto);

module.exports = router;