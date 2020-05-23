import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';

import App from './App';

import {connect} from 'react-redux';

import {
  BrowserRouter as ReactRouter,
  Route,
  Switch
} from 'react-router-dom';

const userSignedIn = this.props.user.jwt ? true : false;

class Router extends React.Component{

  //esto es un componente que depende de condiciones, donde se muestra o no
  signedInRoutes(userSignedIn){
    if(userSignedIn){
      return(
        <Route path="/new" render={()=><h1>Bienvenido</h1>} />
      );
    }
  };

  home(userSignedIn){
    if(userSignedIn) return Dashboard;
    return Home;
  }

  render(){
    return(
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={this.home(userSignedIn)}></Route>
            <Route exact path="/lugares/:slug" component={Place}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Login}></Route>
            {this.signedInRoutes(userSignedIn)}
          </Switch>
        </App>
      </ReactRouter>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(Router);