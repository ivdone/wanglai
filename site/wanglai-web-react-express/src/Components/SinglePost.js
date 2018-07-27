import React, { Component } from 'react';

class SinglePost extends Component {
  render() {
    const post = this.props.post;
    const tags = post.tags.map((tag, id) => 
      <li key={id}><a onClick={this.props.callback}>{tag.fullName}</a></li>
    );
    return (
      <div className="single-post single-blog">
          <img className="img-fluid" src={post.img} alt=""/>
          <ul className="tags">
            {tags}
          </ul>
          <a className="blog-single.html">
            <h1>
              {post.title}
            </h1>
          </a>
          <div className="content-wrap">
            {post.content}
          </div>
          <div className="bottom-meta">
            <div className="user-details row align-items-center">
              <div className="comment-wrap col-lg-6">
                <ul>
                  <li><span>📅</span>{post.post_date}</li>
                </ul>
              </div>              
            </div>
          </div>
      </div>
    );
  }
}

export default SinglePost;
