require("dotenv").config()
const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

app.use(express.static(path.resolve(__dirname, "publico")));

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.set("views", path.resolve(__dirname, "src", "view"));
app.set("view engine", "ejs");

app.listen(3000, function(){
    console.log("Servidor rodando suave");
});

app.use(routes);