import React, { Component } from 'react';

class BlogSideBar extends Component {
  render() {
    const rows = this.props.tags.map((tag, id) => 
        <li key="id"><a onClick={() => this.props.callback(tag.name)} className="justify-content-between align-items-center d-flex"><h6>{tag.name}</h6> <span>{tag.count}</span></a></li>
    );  
    const sum = this.props.tags.reduce((acc, curr) => acc + curr.count, 0);
    return (
        <div className="col-lg-4 sidebar">
            <div className="single-widget search-widget">
                <form action="#">
                  <input type="text" placeholder="Search Posts" name="search2"/>
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>                             
            </div>

            <div className="single-widget protfolio-widget">
                <img src="img/blog/s-img.jpg" alt=""/>
                <a href="#"><h4>Adele Gonzalez</h4></a>
                <p>
                    MCSE boot camps have its supporters and
                    its detractors. Some people do not understand why you should have to spend money
                    on boot camp when you can get.
                </p>
                <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>                               
            </div>

            <div className="single-widget category-widget">
                <h4 className="title">Post Categories</h4>
                <ul>
                    <li key="id"><a onClick={() => this.props.callback("*")} className="justify-content-between align-items-center d-flex"><h6>All</h6> <span>{sum}</span></a></li>
                    {rows}
                </ul>
            </div>
        </div>
    );
  }
}

export default BlogSideBar;
