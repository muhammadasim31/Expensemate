const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',     
    host: 'localhost',
    database: 'expensetracker', 
    password: 'asim31', 
    port: 5432,               
});

module.exports = pool;
