const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: '258789852g',
    host: 'localhost',
    port: 5432,
    database: 'launchstoredb'
})