require("dotenv").config()
const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, "publico")));

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.set("views", path.resolve(__dirname, "src", "view"));
app.set("view engine", "ejs");

app.listen(PORT, function(){
    console.log("Servidor rodando suave");
});

app.use(routes);