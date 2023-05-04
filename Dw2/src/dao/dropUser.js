const db = require("./conexao")

async function excluir() {

    await db.query("drop table Users")

}

excluir()