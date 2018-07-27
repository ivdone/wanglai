import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <React.Fragment>
        <div id="preloder">
		    <div className="loader"></div>
	    </div>
        
	    <header className="header-section sp-pad" >	
            <h3 className="site-logo">旺来鲜<sup>®</sup>茶</h3>
            <span className="search-top" role="img" area-label="emoji">🍍</span>
            <div className="nav-switch">
                <i className="fa fa-bars"></i>
            </div>
            <nav className="main-menu">
                <ul>
                    <li><Link to="/">主页</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                    <li><Link to="/products">饮品</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">联系我们</Link></li>
                </ul>
            </nav>
        </header>
        </React.Fragment>
    );
  }
}

export default Header;


