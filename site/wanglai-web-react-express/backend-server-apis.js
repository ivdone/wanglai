const express = require('express');
const path = require('path');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient;
var db;

app.use(express.static(path.join(__dirname, 'build')));
console.log(path.join(__dirname, 'build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/post', function (req, res) {
    db.collection('posts').find().toArray((err, results) => {
        console.log(err, results);
        res.json(results);
    });
});

app.get('/api/post/:post_id', function (req, res) {    
    var postid = req.params.post_id;    
    res.json(test[postid]);
});

app.get('/api/products', function (req, res) {
    db.collection('products').find().toArray((err, results) => {
        console.log(err, results);
        res.json(results);
    });
});

app.get('/api/products/:product_id', function (req, res) {
    const productid = req.params.product_id;
    if (productid < 0 || productid >= testProducts.length)
        res.send("Invalid Product Id");
    else
        res.json(testProducts[productid]);
});

app.get('/api/blog_tags', function (req, res) {
    db.collection('blog_tags').find().toArray((err, results) => {
        console.log(err, results);
        res.json(results);
    });
});

app.post('/api/blog_tags', function (req, res) {
    db.collection('blog_tags').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.send('success');
    });
});

app.get('/api/product_tags', function (req, res) {
    db.collection('product_tags').find().toArray((err, results) => {
        console.log(err, results);
        res.json(results);
    });
});

app.post('/api/product_tags', function (req, res) {
    db.collection('product_tags').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.send('success');
    });
});

MongoClient.connect('mongodb://localhost:27017/wanglai', { useNewUrlParser: true }, (err, client) => {
  // ... do something here
  if (err) throw err;
  console.log("mongodb connected");
  db = client.db('wanglai');
  app.listen(8080);
});