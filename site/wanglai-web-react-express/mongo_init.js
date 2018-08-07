const MongoClient = require('mongodb').MongoClient;
var db;

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
  }
];

const blog_tags = [ 
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

const sample_products = [
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

const sample_posts = [
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

const init = () => {
	product_tags_init();
	blog_tags_init();
	sample_product_init();
	sample_posts_init();
}

const product_tags_init = () => {
	console.log('Initializing product tags...');

	db.collection('product_tags').remove({});
	product_tags.forEach(ele => {
	    db.collection('product_tags').save(ele, (err, result) => {
	        if (err) return console.log(err);
	    });
	});
}

const sample_posts_init = () => {
	console.log('Initializing product tags...');

	db.collection('posts').remove({});
	sample_posts.forEach(ele => {
	    db.collection('posts').save(ele, (err, result) => {
	        if (err) return console.log(err);
	    });
	});
}

const sample_product_init = () => {
	console.log('Initializing product tags...');

	db.collection('products').remove({});
	sample_products.forEach(ele => {
	    db.collection('products').save(ele, (err, result) => {
	        if (err) return console.log(err);
	    });
	});
}

const blog_tags_init = () => {
	console.log('Initializing blog tags...');

	db.collection('blog_tags').remove({});
	blog_tags.forEach(ele => {
	    db.collection('blog_tags').save(ele, (err, result) => {
	        if (err) return console.log(err);
	    });
	});
}

 

MongoClient.connect('mongodb://localhost:27017/wanglai', { useNewUrlParser: true }, (err, client) => {
  // ... do something here
  if (err) throw err;
  console.log("mongodb connected");
  db = client.db('wanglai');
  init();
  client.close();
});

