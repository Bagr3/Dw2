const pool = require("../dao/conexao");

function User(body){
    this.body = body;
}

 User.searchUsers = async () => {
    try{
        const user = await pool.query("SELECT * FROM Users");
        return user.rows;
    }catch(e){
        console.log(`Houve algum erro ${e}`);
    }
};

 User.insert = async (body) =>{
      try {
        await pool.query(`INSERT INTO Users (cpf, nameUser, email, password, tel, msg, country)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7)`,
        [body.cpf, body.nameUser, body.email, body.password, body.tel,
        body.msg, body.country]);
      } catch (e) {
        console.log(`Houve algum erro ${e}`)
      }
 }
    
module.exports = User;
