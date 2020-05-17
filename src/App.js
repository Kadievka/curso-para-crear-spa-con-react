import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition'
import {withRouter} from 'react-router-dom';

import MyAppBar from './components/navigation/MyAppBar';

import  './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.history.push("/");
  }

  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar goHome={this.goHome}/>
        <TransitionGroup>
          <CSSTransition classNames="left-out" timeout={300} 
          key={this.props.location.pathname.split('/')[1]}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
