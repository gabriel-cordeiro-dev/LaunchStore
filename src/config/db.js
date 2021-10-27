const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: 'storeadmin',
    host: 'store.c8onx7vkvux1.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'store'
})