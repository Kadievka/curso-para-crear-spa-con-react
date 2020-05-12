import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './pages/Home';
import Login from './pages/Login';
import  './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
  }



  render() {
    return (
      <MuiThemeProvider>

        <Router>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/" style={{"marginLeft": "1em"}}>Home</Link>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
          </div>
        </Router>

      </MuiThemeProvider>
    );
  }
}

export default App;
