import React, { Component } from 'react';

import HeroSlider from './Components/HeroSlider'
import Intro from './Components/Intro'
import LatestBlogs from './Components/LatestBlogs'
import ContactSection from './Components/ContactSection'
import DrinksHome from './Components/DrinksHome'

const bgurl="/img/review-bg.jpg"
const productsUrl="/api/products";
const blogPreviewsUrl="/api/post";

class Home extends Component {
  constructor()
  {
    super();
    this.state= {
        products: [],
        blogPreviews: []
    };
  }

  componentDidMount()
  {
    
    Promise.all([
        fetch(productsUrl),
        fetch(blogPreviewsUrl)
    ]).then(
        ([products, blogPreviews]) => {
            Promise.all([products.json(), blogPreviews.json()])
                .then(([products, blogPreviews]) => {
                    this.setState({
                        products: products,
                        blogPreviews: blogPreviews
                    });
                });
        }
    );
  }

  render() {
    return (
        <React.Fragment>
            <HeroSlider className="hero-slider-area"/>
            <Intro className="intro-area"/>
            <DrinksHome className="drinks-area" products={this.state.products}/>
            <LatestBlogs className="latest-blog" BlogPreviews={this.state.blogPreviews} />
            <ContactSection className="contact-area" bgurl={bgurl}/>
        </React.Fragment>
    );
  }
}

export default Home;
