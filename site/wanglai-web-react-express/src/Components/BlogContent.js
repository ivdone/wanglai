import React, { Component } from 'react';
import BlogPreviewLarge from './BlogPreviewLarge'

class BlogContent extends Component {
  render() {
    const rows = this.props.previews.map((preview, id) => 
      <BlogPreviewLarge blog={preview} key={id}/>
    );  
    return (
        <div className="col-lg-8 post-list blog-post-list">
            {rows}
        </div>
    );
  }
}

export default BlogContent;
