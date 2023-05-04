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

exports.editar =  async (req, res) =>{
    const user = await User.searchUsersPorId(req.params.id);
    res.render("editar", { user });
}

exports.editarsalvo =  async (req, res) =>{
    console.log(req.body)
    await User.update(req.body, req.params.id);
    res.redirect("/exibir");
}

exports.exibir = async (req, res) =>{
    const users = await User.searchUsers();
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

exports.DeletarId =  async (req, res) =>{
   
   await User.deleteId(req.params);

    res.redirect("/exibir");    
}
