import React, { Component } from 'react';

import HeroSlider from './Components/HeroSlider'
import Intro from './Components/Intro'
import MileStone from './Components/MileStone'
import LatestBlogs from './Components/LatestBlogs'
import Contact from './Components/Contact'
import DrinksHome from './Components/DrinksHome'

const test = [
    {
        blogid : 0,
        img : "img/b1.jpg",
        tags: [{id : 1, title : "Travel"}, {id : 0, title : "Life style"}],
        title: "Portable latest Fashion for young women",
        preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        post_date: "31st January, 2018"
    },
    {
        blogid : 1,
        img : "img/b2.jpg",
        tags: [{id : 1, title : "Travel"}, {id : 0, title : "Life style"}],
        title: "Portable latest Fashion for young women 2",
        preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        post_date: "31st January, 2018"
    }
];

const testDrinks = [
    {
        id : 1,
        url : "img/drinks/1.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害"
    },
    {
        id : 2,
        url : "img/drinks/2.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害"
    },
    {
        id : 3,
        url : "img/drinks/3.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害"
    },
    {
        id : 4,
        url : "img/drinks/4.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        size : "sm-wide"
    },
    {
        id : 5,
        url : "img/drinks/5.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        size : "sm-wide"
    },
    {
        id : 6,
        url : "img/drinks/6.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害很厉害"
    },
    {
        id : 7,
        url : "img/drinks/7.jpg",
        title : "黑糖珍珠波霸撞奶",
        desc : "很厉害",
        size : "sm-wide"
    }
];

class Home extends Component {
  render() {    
    return (
        <React.Fragment>
            <HeroSlider className="hero-slider-area"/>
            <Intro className="intro-area"/>
            <DrinksHome className="drinks-area" drinks={testDrinks}/>
            <LatestBlogs className="latest-blog" BlogPreviews={test} />
            <MileStone className="milestones"/>
            <Contact className="contact-area"/>
        </React.Fragment>
    );
  }
}

export default Home;
