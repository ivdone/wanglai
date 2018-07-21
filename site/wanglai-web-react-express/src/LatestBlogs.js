import React, { Component } from 'react';
import logo from './logo.svg';

class LatestBlogs extends Component {
  render() {
    return (
      <section className="latest-blog-area sp-pad" id="blog">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="sp-title">Latest News from our Blog</h1>
              <p className="sp-sub-title">Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>          
        <div className="row">
          <div className="col-lg-6 single-blog">
            <img className="img-fluid" src="img/b1.jpg" alt=""/>
            <ul className="tags">
              <li><a href="#">Travel</a></li>
              <li><a href="#">Life style</a></li>
            </ul>
            <a href="#"><h4>Portable latest Fashion for young women</h4></a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
            </p>
            <p className="post-date">31st January, 2018</p>
          </div>
          <div className="col-lg-6 single-blog">
            <img className="img-fluid" src="img/b2.jpg" alt=""/>
            <ul className="tags">
              <li><a href="#">Travel</a></li>
              <li><a href="#">Life style</a></li>
            </ul>
            <a href="#"><h4>Portable latest Fashion for young women</h4></a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.
            </p>
            <p className="post-date">31st January, 2018</p>
          </div>            
        </div>
      </div>  
      </section>
    );
  }
}

export default LatestBlogs;
