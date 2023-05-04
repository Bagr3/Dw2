const db = require(`./conexao`)

async function create() {

    await db.query(`CREATE TABLE Users (

        id serial PRIMARY KEY,
        nameUser varchar(255) NOT NULL,
        cpf varchar(14) NOT NULL,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        tel varchar(32) NOT NULL,
        country varchar(100) NOT NULL,
        msg text NOT NULL

    )`)

}

create()