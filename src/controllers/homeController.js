const { render } = require("ejs");
const User = require("../models/UserModels");

exports.index = (req, res) =>{
    res.render("index");
}

exports.signin = (req, res) =>{
    res.render("signin");
}

exports.conclude = (req, res) =>{
    res.render("conclude");    
}

exports.wwa = (req, res) =>{
    res.render("wwa");
}

exports.exibir = async (req, res) =>{
    const users = await User.searchUsers();
    console.log(users)
    res.render("exibir", { users });
}

exports.trataPost =  async (req, res) =>{
    if (req.url == "/insert"){
        User.insert(req.body)
    }
    res.redirect("/");    
}

exports.pesquisa = async (req , res) => {

    const users = await User.buscaPorNome(req.params);
    console.log(req.params.nameUser);

    res.render("exibir" , {users} )

}

exports.editarMostrar =  async (req, res) =>{

    const Users = await User.searchUsersPorCpf(req.params)[0];

    res.render(editar);    
}

exports.editarReceber = async (req, res) => {
     if (req.url == "/editar"){
        const User = await User.update(req.body);
     }
     res.redirect("/listar");
}