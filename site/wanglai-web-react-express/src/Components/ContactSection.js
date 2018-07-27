import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const style = {backgroundImage: "url(\"" + this.props.bgurl + "\")"};

    return (
      <section className="contact-section set-bg spad" style={style}>
        <div className="container-fluid contact-warp">
          <div className="contact-text">
            <div className="container p-0">
              <span className="sp-sub-title">Wanglai</span>
              <h3 className="sp-title">联系我们</h3>
              <p>请留下您的联系方式，我们会在48小时内与您联系。</p>

              <ul className="con-info">
                <li><i className="flaticon-phone-call"></i>+12 123 222 555</li>
                <li><i className="flaticon-envelope"></i>office@template.com</li>
                <li><i className="flaticon-placeholder"></i>Main Str. no 45-46, b3, 56832, Chengdu, China</li>
              </ul>
            </div>
          </div>
          <div className="container p-0">
            <div className="row">
              <div className="col-xl-8 offset-xl-4">
                <form className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="称呼"/>
                    </div>
                    <div className="col-md-6">
                      <input type="tel" placeholder="联系电话"/>
                    </div>
                    <div className="col-md-12">
                      <input type="text" placeholder="主题"/>
                      <textarea placeholder="内容"></textarea>
                      <button className="site-btn light">留言</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
