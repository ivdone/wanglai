import React, { Component } from 'react';
import PageTop from './Components/PageTop'
import ProductsContent from './Components/ProductsContent'

const testCat = [
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

const testDrinks = [
    {
        id : 1,
        url : "img/drinks/1.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "photo",
        desc : "很厉害"
    },
    {
        id : 2,
        url : "img/drinks/2.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "land",
        desc : "很厉害"
    },
    {
        id : 3,
        url : "img/drinks/3.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "wedding",
        desc : "很厉害"
    },
    {
        id : 4,
        url : "img/drinks/4.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "wedding",
        size : "sm-wide"
    },
    {
        id : 5,
        url : "img/drinks/5.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "photo",
        size : "sm-wide"
    },
    {
        id : 6,
        url : "img/drinks/6.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "port",
        desc : "很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害"
    },
    {
        id : 7,
        url : "img/drinks/7.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        category: "port",
        size : "sm-wide"
    },
    {
        id : 8,
        url : "img/drinks/8.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "land",
        desc : "很厉害",
    },
    {
        id : 9,
        url : "img/drinks/9.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "wedding",
        desc : "很厉害",
    },
    {
        id : 10,
        url : "img/drinks/10.jpg",
        title : "黑糖珍珠波霸撞奶",
        category: "land",
        desc : "很厉害",
    }



];

class Products extends Component {

  render() {    
    return (
        <React.Fragment>
            <PageTop bgurl="img/headers-bg/3.jpg" page="饮品"/>
            <ProductsContent className="product-content-area" categories={testCat} drinks={testDrinks} />
        </React.Fragment>
    );
  }
}

export default Products;
