import React from 'react';
import { connect } from 'react-redux';
import MyAppBar from './MyAppBar';
import {push} from 'react-router-redux';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.dispatch(push("/"));
  }

  render(){
    return <MyAppBar goHome={this.goHome}/>
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);