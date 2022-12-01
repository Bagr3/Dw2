const pool = require("./src/dao/conexao");
const homeController = require("./src/controllers/homeController");
const express = require("express");
const route = express.Router();

route.get('/', homeController.index);

route.get('/signin', homeController.signin);

route.get('/conclude', homeController.conclude);

route.get('/wwa', homeController.wwa);

route.get('/exibir', homeController.exibir);

route.get("/exibir/:cpf", homeController.pesquisa);

route.post("/pesquisar", homeController.pesquisa);

route.get("/editar")

route.post('/insert', homeController.trataPost);

route.get("/editar/:cpf", homeController.editarMostrar);

module.exports = route;