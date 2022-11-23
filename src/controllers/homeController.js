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
    res.render("index");    
}

