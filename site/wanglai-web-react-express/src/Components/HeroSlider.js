import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

class HeroSlider extends Component {
  render() {
    const options = {
        items: 1,
        rewind: true,
        autoplay: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    };
     
    return (
        <section className="hero-section">
        <div className="hero-slider">
        <OwlCarousel ref="car" options={options} >
            <div className="hs-item set-bg sp-pad hero-slider-1" data-setbg="">
                <div className="hs-text">
                    <h2 className="hs-title">旺来</h2>
                    <p className="hs-des">我们用心 <br/>做好茶</p>
                </div>
            </div>
            <div className="hs-item set-bg sp-pad hero-slider-2" data-setbg="img/hero-slider/2.jpg">
                <div className="hs-text">
                    <h2 className="hs-title">旺来</h2>
                    <p className="hs-des">我们用心 <br/>做好茶</p>
                </div>
            </div>
        </OwlCarousel>
        </div>
        </section>
    );
  }
}

export default HeroSlider;

