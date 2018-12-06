const express = require('express');
const path = require('path');
const app = express();
const bodyParser= require('body-parser')
const mongodb = require('mongodb')
const cors = require('cors')
const MongoClient = mongodb.MongoClient;
var db;

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));
// console.log(path.join(__dirname, 'build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/products', function (req, res) {
  res.redirect('/');
});

app.get('/about', function (req, res) {
  res.redirect('/');
});

app.get('/blog', function (req, res) {
  res.redirect('/');
});

app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/post', function (req, res) {
    db.collection('posts').find().toArray((err, results) => {
        //console.log(err, results);
        res.json(results);
    });
});

app.get('/api/post/:post_id', function (req, res) {    
    var postid = req.params.post_id; 
    db.collection('posts').find({id: postid}).toArray((err, results) => {
        //console.log(err, results);
        res.json(results);
    });
});

app.get('/api/products', function (req, res) {
    db.collection('products').find().toArray((err, results) => {
        //console.log(err, results);
        res.json(results);
    });
});

app.get('/display', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'display.html'))
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
        //console.log(err, results);
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
        //console.log(err, results);
        res.json(results);
    });
});

// app.post('/api/product_tags', function (req, res) {
//     db.collection('product_tags').save(req.body, (err, result) => {
//         if (err) return console.log(err);

//         console.log('saved to database');
//         res.send('success');
//     });
// });

app.post('/api/contact_info/', function (req, res) {
    console.log(req.body);
    db.collection('contact_info').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.send('成功提交，我们将尽快与您联系');
    });
});

app.get('/api/contact_info/', function (req, res) {
    db.collection('contact_info').find().toArray((err, results) => {
        //console.log(err, results);
        res.json(results);
    });
});

app.delete('/api/contact_info/:id', function (req, res) {
    var id = req.params.id;
    var result = db.collection('contact_info').deleteOne({_id: new mongodb.ObjectID(id)});
    res.json(result)
});

MongoClient.connect('mongodb://localhost:27017/wanglai', { useNewUrlParser: true }, (err, client) => {
  // ... do something here
  if (err) throw err;
  const PORT = process.env.PORT || 8080;
  db = client.db('wanglai');
  console.log("app listening on port:" + PORT);
  app.listen(PORT);
});
