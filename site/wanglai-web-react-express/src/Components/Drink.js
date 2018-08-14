import React, { Component } from 'react';

class Drink extends Component {
  render() {
    //console.log(this.props);
    const products = this.props.products;
    const style = {backgroundImage: "url(\"" + products.url + "\")"};
    return (
        <div className={"single-portfolio set-bg " + (products.size ? " " + products.size : "")} style={style}>
            <a className="portfolio-info">
                <div className="pfbg set-bg" style={style}></div>
                <h5>{products.title}</h5>
                <p>{products.desc}</p>
            </a>
        </div>
    );
  }
}

export default Drink;