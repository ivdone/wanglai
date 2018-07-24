import React, { Component } from 'react';

class Drink extends Component {
  render() {
    const drink = this.props.drink;
    const style = {backgroundImage: "url(\"" + drink.url + "\")"};
    return (
        <div className={"single-portfolio set-bg " + (drink.size ? drink.size : "")} style={style}>
            <a className="portfolio-info">
                <div className="pfbg set-bg" style={style}></div>
                <h5>{drink.title}</h5>
                <p>{drink.desc}</p>
            </a>
        </div>
    );
  }
}

export default Drink;