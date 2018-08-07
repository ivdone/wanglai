import React, { Component } from 'react';
import PageTop from './Components/PageTop'
import ProductsContent from './Components/ProductsContent'

const productsUrl="/api/products";
const tagsUrl="/api/product_tags"

class Products extends Component {
  constructor()
  {
    super();
    this.state= {
        products: [],
        tags: []
    };
  }

  componentDidMount()
  {    
    Promise.all([
        fetch(productsUrl),
        fetch(tagsUrl)
    ]).then(
        ([products, tags]) => {
            Promise.all([products.json(), tags.json()])
                .then(([products, tags]) => {
                    this.setState({
                        products: products,
                        tags: tags
                    });
                });
        }
    );

  }
  render() {
    console.log(this.state);

    return (
        <React.Fragment>
            <PageTop bgurl="img/headers-bg/3.jpg" pageurl="/products" page="饮品"/>
            <ProductsContent className="product-content-area" tags={this.state.tags} products={this.state.products} />
        </React.Fragment>
    );
  }
}

export default Products;
