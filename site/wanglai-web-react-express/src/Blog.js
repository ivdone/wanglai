import React, { Component } from 'react';
import HeroSlider from './Components/HeroSlider'
import Intro from './Components/Intro'
import PageTop from './Components/PageTop'
import MileStone from './Components/MileStone'

class Products extends Component {
  render() {    
    return (
        <React.Fragment>
            <PageTop bgurl="img/headers-bg/4.jpg" page="Blog"/>
            <Intro className="intro-area"/>
            <MileStone className="milestones-area"/>

        </React.Fragment>
    );
  }
}

export default Products;
