import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import App from './App';

import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';

export default class Router extends React.Component{
  render(){
    return(
      <ReactRouter>
        <App><Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Login}></Route>
        </App>
      </ReactRouter>
    )
  }
}