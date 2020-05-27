import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class LogoutButton extends React.Component{
  render(){
    return(
      <FlatButton label="Cerrar sesión" onClick={this.props.logout}/>
    );
  }
}