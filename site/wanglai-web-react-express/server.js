const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mypass',
    database : 'wanglai'
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
app.get('/blogs', (req, res) => {
    let sql = 'SELECT * FROM blog';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table created...');
    });
});

app.put('/blog', (req, res) => {
    const test = {
        post_date:now(),
        blog_title:'Cartridge Is Better Than Ever A Discount Toner',
        blog_preview='MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.',
        blog_content='MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.<blockquote class=\"generic-blockquote\">        “Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government.banking\”</blockquote>',
        blog_picture='img/blog/p1.jpg',
        blog_like_count=6
    };
    connection.beginTransaction(function(err) {
        if (err) { throw err; }
        connection.query('INSERT INTO blogs SET ?', 
            test, function(err, result) {
            if (err) { 
                connection.rollback(function() {
                    throw err;
                });
            }
        
            var log = 'Post ' + result.insertId + ' added';
        
            connection.query('INSERT INTO log SET data=?', log, function(err, result) {
                if (err) { 
                    connection.rollback(function() {
                        throw err;
                    });
                }  
                connection.commit(function(err) {
                    if (err) { 
                        connection.rollback(function() {
                            throw err;
                        });
                    }
                    console.log('success!');
                });
            });
        });
    });
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table created...');
    });
});

app.listen('3000', () => {
    console.log('Server started at 3000');
});