import React, { Component } from 'react';

class MileStone extends Component {
  render() {
    return (
      <div className="element spad sp-pad">
        <div className="title text-center">
          <h1 className="sp-title">今天的旺来</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 fact-box">
            <div className="fact-content">
              <i className="flaticon-planet-earth"></i>
              <h2>4</h2>
              <p>覆盖城市</p>
            </div>
          </div>
          <div className="col-lg-3 fact-box">
            <div className="fact-content">
              <i className="flaticon-trophy"></i>
              <h2>7</h2>
              <p>已获荣誉</p>
            </div>
          </div>
          <div className="col-lg-3 fact-box">
            <div className="fact-content">
              <i className="flaticon-calendar"></i>
              <h2>23年</h2>
              <p>品牌历史</p>
            </div>
          </div>
          <div className="col-lg-3 fact-box">
            <div className="fact-content">
              <i className="flaticon-atomic"></i>
              <h2>19</h2>
              <p>品牌门店</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MileStone;
