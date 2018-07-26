import React, { Component } from 'react';
import DrinksProducts from './DrinksProducts'

class ProductsContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      drinks: this.props.drinks
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update("*");
  }

  update(category) {
    this.setState(
        (prevState, props) => {
            return {drinks : this.props.drinks.filter(drink => category === "*" || category === drink.category)};
        }
    );
  }

  render() {
    const categories = this.props.categories.map((cat) => 
                    <li className="control filter-btn" onClick={() => this.update(cat.class)}>{cat.fullName}</li>
                );
    return (
      <React.Fragment>
        <div className="sp-pad spad">
            <ul className="portfolio-filter controls">
                <li className="control filter-btn" onClick={() => this.update("*")}>All</li>
                {categories}
            </ul>
        </div>
        <DrinksProducts drinks={this.state.drinks}/>
      </React.Fragment>

    );
  }
}

export default ProductsContent