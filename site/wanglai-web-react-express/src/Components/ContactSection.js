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
              <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus. In hac habi tasse platea dictumst. Curabitur rhoncus auctor eleifend.</p>

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
                      <input type="text" placeholder="Your name"/>
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="E-mail"/>
                    </div>
                    <div className="col-md-12">
                      <input type="text" placeholder="Subject"/>
                      <textarea placeholder="Message"></textarea>
                      <button className="site-btn light">Send</button>
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
