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

 User.searchUsersPorId = async (id) => {
  try{
      const user = await pool.query('SELECT * FROM Users WHERE id = $1', [id]);        
        return user.rows[0];
  }catch(e){
      console.log(`Houve algum erro ${e}`);
  }
};

 User.buscaPorNome = async(body) => {
  try {
    body.nome = String(body.nome).trim();
    body.nome = body.nome.replace(' ', '%');
    const user = await pool.query(
      `
      SELECT *
      FROM Users
      WHERE upper(nameUser) LIKE upper('%${body.nome}%')
      ORDER BY Users.id
      `
    );
    return user.rows;
  } catch (e) {
    console.log(e)
  }
}


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

User.update = async (body, id) => {
  try {
    console.log(id);
    console.log(body);
    await pool.query('UPDATE Users SET cpf = $1, nameUser = $2, email = $3, password = $4, tel = $5, msg = $6, country = $7  WHERE id = $8',  [body.cpf, body.nameUser, body.email, body.password, body.tel, body.msg, body.country, id]);
  } catch (e) {
    console.log(`Houve um erro ${e}`);
  }
};

  User.deleteId = async (body) => {
    try {
      await pool.query("DELETE FROM Users WHERE id = $1", [body.id]);
    } catch (e) {
      console.log(e);
    }
  };


    
module.exports = User;
