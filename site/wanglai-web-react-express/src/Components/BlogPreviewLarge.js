import React, { Component } from 'react';

class BlogPreviewLarge extends Component {
  render() {
    const blog = this.props.blog;
    const tags = blog.tags.map((tag, id) => 
      <li key={id}>{tag.title}</li>
    );
    return (
      <div className="single-post">
          <img className="img-fluid" src="img/blog/p1.jpg" alt=""/>
          <ul className="tags">
            {tags}
          </ul>
          <a className="blog-single.html">
            <h1>
              Cartridge Is Better Than Ever
              A Discount Toner
            </h1>
          </a>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed MCSE training.
          </p>
      </div>
    );
  }
}

export default BlogPreviewLarge;
