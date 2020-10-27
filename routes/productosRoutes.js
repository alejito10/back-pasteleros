var express = require("express");
var router = express.Router();

const productosController = require('../controllers/productoController');
const productoController = require("../controllers/productoController");

router.route('/new')
    .post(productosController.newProducto);

router.route('/')
    .get(productosController.findOneProducto)
    .put(productosController.updateOneProducto)
    .delete(productosController.deleteOneProducto);
    

router.route("/todos")
    .get(productoController.findAllProductos);



module.exports = router;