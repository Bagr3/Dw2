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

User.update = async (body) => {
  try {
    await client.query(
      'UPDATE Users SET nameUser = $1, cpf = $2, email = $3, password = $4, tel = $5, msg = $6, coutry = $7  WHERE cpf = $8'
      [body.cpf, body.nameUser, body.email, body.password, body.tel,
      body.msg, body.country]);
  } catch (e) {
    console.log(`Houve um erro ${e}`);
  }

  User.deleteCpf = async (body) => {
    try {
      await client.query("DELETE FROM Users WHERE cpf = $1", [body.cpf]);
    } catch (e) {
      console.log(e);
    }
  };

};
    
module.exports = User;
