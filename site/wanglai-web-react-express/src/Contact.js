import React, { Component } from 'react';
import PageTop from './Components/PageTop'
import ContactSection from './Components/ContactSection'

const bgurl = "./img/review-bg.jpg"

class Products extends Component {
  render() {    
    return (
        <React.Fragment>
            <PageTop bgurl="/img/headers-bg/4.jpg" pageurl="/contact" page="联系我们"/>
            <ContactSection bgurl={bgurl}/>
        </React.Fragment>
    );
  }
}

export default Products;