const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'shyne2Kay_0580',
    database: 'node_crud'
});

// connect to the db
db.connect( (error) => {
    if(error){
        console.log('There was an error connection to DB', error.stack)
        return;
    }

    console.log('Successfully connected to DB');
});

// export the db connection
module.exports = db;