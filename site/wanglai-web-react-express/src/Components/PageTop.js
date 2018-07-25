import React, { Component } from 'react';

class PageTop extends Component {
  render() {
    const bgurl=this.props.bgurl;
    const page=this.props.page;
    const style = {backgroundImage: "url(\"" + bgurl + "\")"};
    return (
        <React.Fragment>
            <div className="page-top-area set-bg" data-setbg={bgurl} style={style}>
                <div className="breadcrumb-area">
                    <a href="/">Home</a> / <span>{page}</span>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default PageTop;
