import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const col = {
      color: 'grey',
      fontSize: '6px'
    }
    return (
      <footer className="footer-section spad">
        <div className="container text-center">
          <div className="social">
            <a><img className="img-fluid" src="/img/contact/Wechat-QR.jpeg" alt=""/></a>
            <a><i className="fa fa-pinterest"></i></a>
            <a><i className="fa fa-facebook"></i></a>
            <a><i className="fa fa-twitter"></i></a>
            <a><i className="fa fa-dribbble"></i></a> 
          </div>
        </div>
        <div className="text-center"><a href="http://miitbeian.gov.cn" style={col}>蜀ICP备18028101</a></div>
      </footer>
    );
  }
}

export default Footer;
