const pool = require("./src/dao/conexao");
const homeController = require("./src/controllers/homeController");
const express = require("express");
const route = express.Router();

route.get('/', homeController.index);

route.get('/signin', homeController.signin);

route.get('/conclude', homeController.conclude);

route.get('/wwa', homeController.wwa);

route.get('/exibir', homeController.exibir);

route.get('/editar/:id', homeController.editar);

route.post('/editarsalvo/:id', homeController.editarsalvo);

route.get('/deletar/:id', homeController.DeletarId);

route.get("/exibir/:id", homeController.pesquisa);

route.post("/pesquisar", homeController.pesquisa);

route.post('/insert', homeController.trataPost);

module.exports = route;