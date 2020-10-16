var expess = require('express');
var router = expess.Router();

const productosController = require('../controllers/productoController');

router.route('/new')
    .post(productosController.newProducto);

module.exports = router;