import React, { Component } from 'react';

class BlogSideBar extends Component {
  render() {
    const rows = this.props.tags.map((tag, id) => 
        <li key={id} onClick={() => this.props.callback(tag.fullName)}><a className="justify-content-between align-items-center d-flex"><h6>{tag.fullName}</h6> <span>{tag.count}</span></a></li>
    );  
    const sum = this.props.tags.reduce((acc, curr) => acc + curr.count, 0);
    return (
        <div className="col-lg-4 sidebar">
            <div className="single-widget search-widget">
                <form action="#">
                  <input type="text" placeholder="努力施工中" name="搜索" disabled/>
                  <button type="submit" disabled><i className="fa fa-search"></i></button>
                </form>                             
            </div>

            <div className="single-widget protfolio-widget">
                <img src="/img/blog/s-img.jpg" alt=""/>
                <h4>项目开发中</h4>
                <p>
                    blog开发中
                </p>
                <ul>
                    <li><i className="fa fa-facebook"></i></li>
                    <li><i className="fa fa-twitter"></i></li>
                    <li><i className="fa fa-dribbble"></i></li>
                    <li><i className="fa fa-behance"></i></li>
                </ul>                               
            </div>

            <div className="single-widget category-widget">
                <h4 className="title">文章分类</h4>
                <ul>
                    <li key="id" onClick={() => this.props.callback("*")}><a className="justify-content-between align-items-center d-flex"><h6>All</h6> <span>{sum}</span></a></li>
                    {rows}
                </ul>
            </div>
        </div>
    );
  }
}

export default BlogSideBar;
