import React from 'react';

import AppBar from 'material-ui/AppBar';

import {indigo600} from 'material-ui/styles/colors';

export default class MyAppBar extends React.Component{
  
  title(){
    return(
    <span style={{'cursor': 'pointer', 'textTransform': 'capitalize'}}>
      {this.props.user.jwt ? 'Bienvenido, '+this.props.user.name : 'Places'} 
    </span>
    );
  }
  
  render(){
    return(
      <AppBar
        title={this.title()}
        style={{'backgroundColor': indigo600}}
        onTitleTouchTap={this.props.goHome}
        showMenuIconButton={false}
      />
    )
  }
}