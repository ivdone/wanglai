import React, { Component } from 'react';
import CategoryFilter from './CategoryFilter'
import Drink from './Drink'

class ProductsContent extends Component {
  render() {
    const drinks = this.props.drinks.map((drink, id) => 
        <Drink drink={drink} key={id}/>
    );
    return (
        <div className="portfolio-warp">                
            {drinks}
        </div>      
    );
  }
}

export default ProductsContent