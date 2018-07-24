import React, { Component } from 'react';

class App extends Component {
  render() {
    const blog = this.props.blog;
    const tags = [];
    blog.tags.forEach((tag) => {
      tags.push(<li key={tag}><a href={"blog.html?tag=" + tag.id}>{tag.title}</a></li>);
    });
    return (
      <div className="col-lg-6 single-blog">
        <img className="img-fluid" src={blog.img} alt=""/>
        <ul className="tags">
          {tags}
        </ul>
        <a href={"blog.html?id=" + blog.blogid}><h4>{blog.title}</h4></a>
        <p>
          {blog.preview}
        </p>
        <p className="post-date">{blog.post_date}</p>
      </div>
    );
  }
}

export default App;
