import React, { Component } from 'react';

class Intro extends Component {
  render() {    
    return (
      <section className="intro-section sp-pad spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 intro-text">
                    <span className="sp-sub-title">关于我们</span>
                    <h3 className="sp-title">何龙真的帅</h3>
                    <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id.</p>
                    <a href="#" className="site-btn">Read More</a>
                </div>
                <div className="col-xl-7 offset-xl-1">
                    <figure className="intro-img mt-5 mt-xl-0">
                        <img src="img/intro.jpg" alt=""/>
                    </figure>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Intro;

