const MongoClient = require('mongodb').MongoClient;
var db;

const product_tags = [
  {
    class: "奶茶",
    fullName: "调味奶茶"
  },
  {
    class: "鲜茶",
    fullName: "宝岛鲜茶"
  },
  {
    class: "复古",
    fullName: "复刻回忆"
  },
  {
    class: "鲜奶",
    fullName: "香醇鲜奶"
  },
  {
  	class: "水果",
  	fullName: "旺来水果"
  },
  {
  	class: "冰饮",
  	fullName: "私创冰饮"
  }
];

const blog_tags = [ 
    {
        id: 0,
        class: "饮品",
        fullName: "饮品",
        count: 24
    },
    {
        id: 1,
        class: "品牌",
        fullName: "品牌",
        count: 55
    }
];

const sample_products = [
    {
        id : 0,
        url : "img/products/compressed/1-min.JPG",
        title : "黑糖珍珠波霸撞奶",
        category: "奶茶",
        desc : "很厉害"
    },
    {
        id : 1,
        url : "img/products/compressed/11-min.JPG",
        title : "黑糖珍珠波霸撞奶",
        category: "鲜茶",
        desc : "很厉害"
    },
    {
        id : 2,
        url : "img/products/compressed/12-min.JPG",
        title : "翠綠包種綠茶",
        category: "复古",
        desc : "很厉害"
    },
    {
        id : 3,
        url : "img/products/compressed/13-min.JPG",
        title : "春日百香綠茶",
        desc : "很厉害",
        category: "鲜奶"
        //size : "sm-wide"
    },
    {
        id : 4,
        url : "img/products/compressed/14-min.JPG",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "水果"    
    },
    {
        id : 5,
        url : "img/products/compressed/15-min.JPG",
        title : "翠玉包種綠奶茶",
        category: "水果",
        desc : "很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害"
    },
    {
        id : 6,
        url : "img/products/compressed/16-min.JPG",
        title : "鳳梨綠冰茶",
        desc : "很厉害",
        category: "冰饮"
    },
    {
        id : 7,
        url : "img/products/compressed/18-min.JPG",
        title : "古釀冬瓜茶",
        category: "鲜茶",
        desc : "很厉害",
    },
    {
        id : 8,
        url : "img/products/compressed/19-min.JPG",
        title : "黑糖珍珠波霸撞奶",
        category: "鲜奶",
        desc : "很厉害",
    }
];

const sample_posts = [
    {
        blogid : 0,
        img : "/img/b1.jpg",
        tags: [{id : 0, class: "饮品", fullName : "饮品"}, {id : 1, class: "品牌", fullName : "品牌"}],
        title: "旺来网站上线",
        preview: "旺来网站alpha上线",
        content: "旺来网站alpha上线",
        post_date: "31st January, 2018"        
    }
    // {
    //     blogid : 1,
    //     img : "/img/b2.jpg",
    //     tags: [{id : 0, class: "品牌", fullName : "品牌"}, {id : 1, class: "饮品", fullName : "饮品"}],
    //     title: "Portable latest Fashion for young women 2",
    //     preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
    //     content: "something",
    //     post_date: "31st January, 2018"
    // },
    // {
    //     blogid : 3,
    //     img : "/img/b2.jpg",
    //     tags: [{id : 1, class: "饮品", fullName : "饮品"}],
    //     title: "Portable latest Fashion for young women 2",
    //     preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
    //     content: "something",
    //     post_date: "31st January, 2018"
    // }
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
