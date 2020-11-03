import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navbar'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render () {return (
    <div className="App">
      
    <BrowserRouter>
  
      <div className="main-content">
      
      <Route path="/Portfolio2" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/Portfolio2/work" component={Work} />
     
      </div>
     
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
