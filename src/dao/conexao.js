const { Pool } = require('pg');

/**
 * Conexão local - via pool de conexões
 */
const pool = new Pool({
   connectionString: process.env.URL,
   ssl: {
    rejectUnauthorized : false,
    requestCert : true
   }
})

/**
 * Conexão heroku - via pool de conexões
 */
/* const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}) */

module.exports = pool;