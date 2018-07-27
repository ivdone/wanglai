import React, { Component } from 'react';
import DrinksProducts from './DrinksProducts'

class ProductsContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tag: "*"
    };
    this.update = this.update.bind(this);
  }

  update(category) {
    this.setState(
        (prevState, props) => {
            return { tag : category};
        }
    );
  }

  render() {
    const tags = this.props.tags.map((tag, id) => 
                    <li className="control filter-btn" key={id} onClick={() => this.update(tag.class)}>{tag.fullName}</li>
                );

    const products = this.props.products.filter(drink => this.state.tag === "*" || this.state.tag === drink.category);

    return (
      <React.Fragment>
        <div className="sp-pad spad">
            <ul className="portfolio-filter controls">
                <li className="control filter-btn" onClick={() => this.update("*")}>All</li>
                {tags}
            </ul>
        </div>
        <DrinksProducts products={products}/>
      </React.Fragment>

    );
  }
}

export default ProductsContent