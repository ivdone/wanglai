import React, { Component } from 'react';
import BlogPreview from './BlogPreview.js';

class LatestBlogs extends Component {
  render() {
    const rows = this.props.BlogPreviews.map((preview, id) => 
      <BlogPreview blog={preview} key={id}/>
    );    

    return (
      <section className="latest-blog-area sp-pad" id="blog">
      <h1 className="sp-title">最新日志</h1>
      <p className="sp-sub-title">记录旺来的故事</p>
      <div className="container">                 
        <div className="row">
          {rows}
        </div>
      </div>  
      </section>
    );
  }
}

export default LatestBlogs;