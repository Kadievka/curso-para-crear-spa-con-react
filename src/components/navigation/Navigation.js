import React from 'react';
import { connect } from 'react-redux';
import MyAppBar from './MyAppBar';
import { routerActions } from 'react-router-redux'

class Navigation extends React.Component{
  constructor(props){
    super(props);
    //console.log(props.user)
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.dispatch(routerActions.push("/"));
  }

  render(){
    return <MyAppBar goHome={this.goHome} user={this.props.user}/>
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);