import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class BlogPreviewLarge extends Component {
  render() {
    const blog = this.props.blog;
    const tags = blog.tags.map((tag, id) => 
      <li key={id} onClick={() => {this.props.callback(tag.fullName)}}><Link to="/blog">{tag.fullName}</Link></li>
    );
    return (
      <div className="single-post single-blog">
          <img className="img-fluid" src={blog.img} alt=""/>
          <ul className="tags">
            {tags}
          </ul>

          <Link to={`/blog/${blog.blogid}`}>
            <h1>
              {blog.title}
            </h1>
          </Link>
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
