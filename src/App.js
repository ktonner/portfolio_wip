import React from 'react';
import logo from './logo.svg';
// import { createBrowserHistory as createHistory } from "history";
import './App.css';
import Navigation from './Components/Navbar'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
    <BrowserRouter>

      <div className="main-content">
      <Switch>
      <Route exact path="/Portfolio2" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Portfolio2/work" component={Work} />
      </Switch>
      </div>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
