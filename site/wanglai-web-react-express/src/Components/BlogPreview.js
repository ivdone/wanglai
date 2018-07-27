import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class BlogPreview extends Component {
  render() {
    const blog = this.props.blog;
    const tags = blog.tags.map((tag, id) => 
      <li key={id}><Link to="/blog">{tag.fullName}</Link></li>
    );
    return (
      <div className="col-lg-4 single-blog">
        <img className="img-fluid" src={blog.img} alt=""/>
        <ul className="tags">
          {tags}
        </ul>
        <Link to={`/blog/${blog.blogid}`}>
          <h4>{blog.title}</h4>
        </Link>
        <p>
          {blog.preview}
        </p>
        <p className="post-date"><span>📅</span>{blog.post_date}</p>
      </div>
    );
  }
}

export default BlogPreview;
