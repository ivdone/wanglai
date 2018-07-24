import React, { Component } from 'react';
import BlogPreview from './BlogPreview.js';

class LatestBlogs extends Component {
  render() {
    const rows = [];
    this.props.BlogPreviews.forEach((preview) => {
      rows.push(<BlogPreview
        blog={preview} key=""/>
      );
    });

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
          {rows}
        </div>
      </div>  
      </section>
    );
  }
}

export default LatestBlogs;
