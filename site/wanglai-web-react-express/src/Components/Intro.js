import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class Intro extends Component {
  render() {    
    return (
      <section className="intro-section sp-pad spad">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-4 intro-text">
                    <span className="sp-sub-title">关于我们</span>
                    <h3 className="sp-title">品牌故事</h3>
                    <p>一个横跨世代的原味重现，怀旧是一种乡愁，时光倒转到60年代。宝岛的小镇上，有着祖父母在巷口酿冬瓜茶的叫卖声。看似不起眼的冬瓜块，却像金钻般的养育我们</p>
                    <Link to="About" className="site-btn">了解更多</Link>
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

