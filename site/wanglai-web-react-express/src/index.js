import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App';
import LatestBlogs from './LatestBlogs'
import Contact from './Contact'
import MileStone from './MileStone'
import Intro from './Intro'
import HeroSlider from './HeroSlider'
import Header from './Header'
import Footer from './Footer'

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

ReactDOM.render(<LatestBlogs BlogPreviews={test}/>, document.getElementById('latest-blog'));
ReactDOM.render(<Contact />, document.getElementById('contact-area'));
ReactDOM.render(<MileStone />, document.getElementById('milestones'));
ReactDOM.render(<Intro />, document.getElementById('intro-area'));
ReactDOM.render(<HeroSlider />, document.getElementById('hero-area'));
ReactDOM.render(<Header />, document.getElementById('header-area'));
ReactDOM.render(<Footer />, document.getElementById('footer-area'));