import React, { Component } from 'react';
import Intro from './Components/Intro'
import PageTop from './Components/PageTop'
import MileStone from './Components/MileStone'

class About extends Component {
  render() {    
    return (
        <React.Fragment>
            <PageTop bgurl="/img/headers-bg/1.jpg" pageurl="/about" page="关于旺来"/>
            <Intro className="intro-area"/>
            <MileStone className="milestones-area"/>

        </React.Fragment>
    );
  }
}

export default About;
