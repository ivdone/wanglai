import React, { Component } from 'react';

class BlogPreviewLarge extends Component {
  render() {
    const blog = this.props.blog;
    const tags = blog.tags.map((tag, id) => 
      <li key={id}><a>{tag.title}</a></li>
    );
    return (
      <div className="single-post single-blog">
          <img className="img-fluid" src={blog.img} alt=""/>
          <ul className="tags">
            {tags}
          </ul>
          <a className="blog-single.html">
            <h1>
              {blog.title}
            </h1>
          </a>
          <p>
            {blog.preview}
          </p>
          <div className="bottom-meta">
            <div className="user-details row align-items-center">
              <div className="comment-wrap col-lg-6">
                <ul>
                  <li><span>📅</span>{blog.post_date}</li>
                </ul>
              </div>              
            </div>
          </div>
      </div>
    );
  }
}

export default BlogPreviewLarge;
