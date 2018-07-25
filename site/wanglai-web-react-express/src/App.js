import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Home'
import About from './About'
import Products from './Products'
import Blog from './Blog'
import Contact from './Contact'

class App extends Component {
  render() {    
    return (
      <Router>
        <div>
          <Header />
          
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
