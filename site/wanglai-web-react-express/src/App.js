import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Home'

class App extends Component {
  render() {    
    return (
      <Router>
        <div>
          <Header />
          
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Header}/>
          <Route path="/topics" component={Footer}/>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
