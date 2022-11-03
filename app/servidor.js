const express = require("express");
const app = express();
const pool = require("./dao/conexao")

app.use('/img', express.static(__dirname + '/publico/img'));
app.use('/css', express.static(__dirname + '/publico/css'));
app.use('/js', express.static(__dirname + '/publico/js'));

app.use(express.json())
app.use(express.urlencoded({

    extended: true

}))

app.listen(3000, function(){
    console.log("Servidor rodando suave");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/view/index.html');
});

app.get('/signin', function(req, res){
    res.sendFile(__dirname + '/view/signin.html');
});

app.get('/conclude', function(req, res){
    res.sendFile(__dirname + '/view/conclude.html');
});

app.get('/wwa', function(req, res){
    res.sendFile(__dirname + '/view/wwa.html');
});

app.post('/insert', function(req, res){
    console.log(`
    req.body.nameUser = ${req.body.nameUser}
    req.body.cpf = ${req.body.cpf}
    req.body.email = ${req.body.email}
    req.body.password = ${req.body.password}
    req.body.tel = ${req.body.tel}
    req.body.msg = ${req.body.msg}
    req.body.country = ${req.body.country}`);

    pool.query(`INSERT INTO Users (cpf, nameUser, email, password, tel, msg, country)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7)`,
        [req.body.cpf, req.body.nameUser, req.body.email, req.body.password, req.body.tel,
        req.body.msg, req.body.country])
        .then(resposta => console.log('ok'))
        .catch(err => console.log('erro: ' + err))

    res.end();
});

app.get('/', function(req,res){

    pool.query(`SELECT * FROM Users `,
    
    .then(resposta => console.log('ok'))
    .catch(err => console.log('erro: ' + err))

});
