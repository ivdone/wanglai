import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class PageTop extends Component {
  render() {
    const bgurl = this.props.bgurl;
    // TODO : Make page url as a list, to support multiple level url. example home/blog/post
    const style = {backgroundImage: "url(\"" + bgurl + "\")"};
    return (
        <React.Fragment>
            <div className="page-top-area set-bg" data-setbg={bgurl} style={style}>
                <div className="breadcrumb-area">
                    <Link to="/">Home</Link> / <Link to={this.props.pageurl}>{this.props.page}</Link>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default PageTop;
