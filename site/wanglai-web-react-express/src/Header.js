import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <React.Fragment>
        <h3 className="site-logo">旺来鲜<sup>®</sup>茶</h3>
        <p className="search-top">🍍</p>
        <div className="nav-switch">
            <i className="fa fa-bars"></i>
        </div>
        <nav className="main-menu">
            <ul>
                <li><a href="index.html">主页</a></li>
                <li><a href="about.html">关于我们</a></li>
                <li><a href="drinks.html">饮品</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">联系方式</a></li>
            </ul>
        </nav>
        </React.Fragment>
    );
  }
}

export default Header;


