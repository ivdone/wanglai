const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
});

db.connect((err) => {
    if (err) {
        throw err;
    }

    console.log('Mysql Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE wanglai';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createposttable', (req, res) => {
    let sql = 'CRETE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY id)';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table created...');
    });
});

app.listen('3000', () => {
    console.log('Server started at 3000');
});