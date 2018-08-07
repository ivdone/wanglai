const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser')

const testProductCat = [
  {
    class: "photo",
    fullName: "Photography"
  },
  {
    class: "wedding",
    fullName: "Weddings"
  },
  {
    class: "land",
    fullName: "Landscapes"
  },
  {
    class: "port",
    fullName: "Portraits"
  },
  {
    class: "photo",
    fullName: "Photography"
  }
];

const testProducts = [
    {
        id : 0,
        url : "img/drinks/1.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "photo",
        desc : "很厉害"
    },
    {
        id : 1,
        url : "img/drinks/2.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "land",
        desc : "很厉害"
    },
    {
        id : 2,
        url : "img/drinks/3.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "wedding",
        desc : "很厉害"
    },
    {
        id : 3,
        url : "img/drinks/4.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "wedding",
        size : "sm-wide"
    },
    {
        id : 4,
        url : "img/drinks/5.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "photo",
        size : "sm-wide"
    },
    {
        id : 5,
        url : "img/drinks/6.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "port",
        desc : "很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害"
    },
    {
        id : 6,
        url : "img/drinks/7.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "port",
        size : "sm-wide"
    },
    {
        id : 7,
        url : "img/drinks/8.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "land",
        desc : "很厉害",
    },
    {
        id : 8,
        url : "img/drinks/9.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "wedding",
        desc : "很厉害",
    },
    {
        id : 9,
        url : "img/drinks/10.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "land",
        desc : "很厉害",
    }
];

const test = [
    {
        blogid : 0,
        img : "/img/b1.jpg",
        tags: [{id : 0, class: "travel", fullName : "Travel"}, {id : 1, class: "life", fullName : "Life"}],
        title: "Portable latest Fashion for young women",
        preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        content: "something",
        post_date: "31st January, 2018"        
    },
    {
        blogid : 1,
        img : "/img/b2.jpg",
        tags: [{id : 0, class: "travel", fullName : "Travel"}, {id : 1, class: "life", fullName : "Life"}],
        title: "Portable latest Fashion for young women 2",
        preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        content: "something",
        post_date: "31st January, 2018"
    },
    {
        blogid : 3,
        img : "/img/b2.jpg",
        tags: [{id : 1, class: "travel", fullName : "Travel"}],
        title: "Portable latest Fashion for young women 2",
        preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        content: "something",
        post_date: "31st January, 2018"
    }
];

const tags = [ 
    {
        id: 0,
        class: "travel",
        fullName: "Travel",
        count: 24
    },
    {
        id: 1,
        class: "life",
        fullName: "Life",
        count: 55
    }
];

const product_tags = [
  {
    class: "photo",
    fullName: "Photography"
  },
  {
    class: "wedding",
    fullName: "Weddings"
  },
  {
    class: "land",
    fullName: "Landscapes"
  },
  {
    class: "port",
    fullName: "Portraits"
  },
  {
    class: "photo",
    fullName: "Photography"
  }
];

app.use(express.static(path.join(__dirname, 'build')));
console.log(path.join(__dirname, 'build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/post', function (req, res) {
    res.json(test);
});

app.get('/api/post/:post_id', function (req, res) {    
    var postid = req.params.post_id;    
    res.json(test[postid]);
});

app.get('/api/products', function (req, res) {
    res.json(testProducts);
});

app.get('/api/products/:product_id', function (req, res) {
    const productid = req.params.product_id;
    if (productid < 0 || productid >= testProducts.length)
        res.send("Invalid Product Id");
    else
        res.json(testProducts[productid]);
});

app.get('/api/tags', function (req, res) {
    res.json(tags);
});

app.get('/api/product_tags', function (req, res) {
    res.json(product_tags);
});

app.listen(8080);