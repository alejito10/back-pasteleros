const express = require('express');
var createError = require('http-errors');
const bodyParser= require('body-parser');
var cookieParser = require('cookie-parser'); 
var logger = require('morgan');
const passport = require('passport');
const multer = require('multer');
const cookieSession = require('cookie-session');
const path = require('path');
require('dotenv').config();
const mongoMiddlewares = require('./middlewares/mongo');

//objeto app
var app = express();

//Rutas cargadas
const userRoutes = require('./routes/users');
const productosRoutes = require('./routes/productosRoutes');
const contactosRoutes = require('./routes/contactosRoutes');

//mideleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(mongoMiddlewares);      //conexion a Mongo

//Rutas
app.use('/', userRoutes);
app.use('/productos', productosRoutes);
app.use('/contactos', contactosRoutes);


app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);
    res.sendStatus(err.status || 500);
});


//Exportar
module.exports = app;