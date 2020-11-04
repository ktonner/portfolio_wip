import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navbar'

import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render () {return (
    <div className="App">
      
    <BrowserRouter>
    <nav>
     <Link to='/'>Home</Link>
    <Link to='/work'>Projects</Link>
  
    </nav>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/work" component={Work} />
      </Switch>
      
     
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
