const db = require('./conexao');

async function connect(){
    await db.connect();
    console.log('Conectou ao banco');
    await db.end();
}

connect();