import React from 'react';
import logo from './logo.svg';
// import { createBrowserHistory as createHistory } from "history";
import './App.css';
import Navigation from './Components/Navbar'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render () {return (
    <div className="App">
      <Navigation/>
    <BrowserRouter>

      <div className="main-content">
      <Switch>
      <Route path="/Portfolio2" component={Home} />
      <Route path="/" component={Home} />
      <Route path="/Portfolio2/work" component={Work} />
      </Switch>
      </div>
     
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
