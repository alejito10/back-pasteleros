//archivos requeridos
const express = require('express');
const mongoose = require('mongoose');

const http = require('http');
const path = require('path');
//creacion servidor
const app = require('./app');
const server = http.createServer(app);
const port = 3000;


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
server.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});