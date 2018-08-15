import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount()  {
    const script = document.createElement("script");

    script.src = "/js/contact.js";
    script.async = true;

    document.body.appendChild(script);
  }

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
                <li><i className="flaticon-phone-call"></i>400-6311008</li>
                <li><i className="flaticon-envelope"></i>暂无</li>
                <li><i className="flaticon-placeholder"></i>成都市锦江区锦华路一段8号1栋11单元19层1940号</li>
              </ul>
            </div>
          </div>
          <div className="container p-0">
            <div className="row">
              <div className="col-xl-8 offset-xl-4">
                <form className="contact-form" id="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input id="contact-name" type="text" placeholder="称呼"/>
                    </div>
                    <div className="col-md-6">
                      <input id="contact-tel" type="tel" placeholder="联系电话"/>
                    </div>
                    <div className="col-md-12">
                      <input id="contact-title" type="text" placeholder="主题"/>
                      <textarea id="contact-content" placeholder="内容"></textarea>
                      <button id="contact-btn" className="site-btn light">留言</button>
                      <div id="contact-submit-response"></div>
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
