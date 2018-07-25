import React, { Component } from 'react';
import PageTop from './Components/PageTop'
import ContactSection from './Components/ContactSection'
class Products extends Component {
  render() {    
    return (
        <React.Fragment>
            <PageTop bgurl="img/headers-bg/5.png" page="联系我们"/>
            <ContactSection />
        </React.Fragment>
    );
  }
}

export default Products;
