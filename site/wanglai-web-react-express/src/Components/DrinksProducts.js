import React, { Component } from 'react';
import DrinksBase from './DrinksBase'

class DrinksProducts extends Component {
  render() {
    return (
        <React.Fragment>
        <section className="portfolio-section sp-pad">
            <DrinksBase drinks={this.props.drinks} />
            <div className="clearfix"></div>
        </section>
        </React.Fragment>
    );
  }
}

export default DrinksProducts