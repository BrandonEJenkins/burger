var mysql = require('mysql2');

var devConnection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bjbootcamp1!',
    database: 'burgers_db',
}

var connection = mysql.createConnection(
    process.env.JAWSDB_URL || devConnection
);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;