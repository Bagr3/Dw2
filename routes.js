const pool = require("./src/dao/conexao");
const homeController = require("./src/controllers/homeController");
const express = require("express");
const route = express.Router();

route.get('/', homeController.index);

route.get('/signin', homeController.signin);

route.get('/conclude', homeController.conclude);

route.get('/wwa', homeController.wwa);

route.get('/exibir', homeController.exibir);

route.post('/insert', homeController.trataPost ,function(req, res){
    console.log(`
    req.body.nameUser = ${req.body.nameUser}
    req.body.cpf = ${req.body.cpf}
    req.body.email = ${req.body.email}
    req.body.password = ${req.body.password}
    req.body.tel = ${req.body.tel}
    req.body.msg = ${req.body.msg}
    req.body.country = ${req.body.country}`);
});

module.exports = route;