import React, { Component } from 'react';
import Drink from './Drink'

class DrinksHome extends Component {
  render() {
    const drinks = this.props.drinks.map((drink) => 
        <Drink drink={drink} key={drink.id}/>
    );
    console.log(drinks);
    return (
        <React.Fragment>
        <section className="portfolio-section sp-pad spad">
            <h1 className="sp-title">招牌饮品</h1>
            <div className="portfolio-warp">                
            {drinks}
            </div>
            <div className="clearfix"></div>
        </section>
        </React.Fragment>
    );
  }
}

export default DrinksHome;


