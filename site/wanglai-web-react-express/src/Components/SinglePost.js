import React, { Component } from 'react';

const post = {
        blogid : 0,
        img : "img/b1.jpg",
        tags: [{id : 1, title : "Travel"}, {id : 0, title : "Life"}],
        title: "Portable latest Fashion for young women",
        preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        post_date: "31st January, 2018",
        content: "something"
}

class SinglePost extends Component {
  render() {
    const blog = this.props.post;
    const tags = post.tags.map((tag, id) => 
      <li key={id}><a href={"blog?tag=" + tag.id}>{tag.title}</a></li>
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