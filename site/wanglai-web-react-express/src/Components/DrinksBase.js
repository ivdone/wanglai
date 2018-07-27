import React, { Component } from 'react';
import Drink from './Drink'

class ProductsContent extends Component {
  render() {
    const products = this.props.products.map((products, id) => 
        <Drink products={products} key={id}/>
    );
    return (
        <div className="portfolio-warp">                
            {products}
        </div>      
    );
  }
}

export default ProductsContent