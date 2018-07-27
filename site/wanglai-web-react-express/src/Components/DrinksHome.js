import React, { Component } from 'react';
import DrinksBase from './DrinksBase'

class DrinksHome extends Component {
  render() {    
    return (
        <React.Fragment>
        <section className="portfolio-section sp-pad spad">
            <h1 className="sp-title">招牌饮品</h1>
            <DrinksBase products={this.props.products} />
            <div className="clearfix"></div>
        </section>
        </React.Fragment>
    );
  }
}

export default DrinksHome;


