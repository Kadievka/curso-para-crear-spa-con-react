import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import * as actions from '../actions/userActions';
import {login, signUp} from '../requests/auth';
import {push} from 'react-router-redux';
import {
  BrowserRouter as ReactRouter,
  Link,
  Route
} from 'react-router-dom';

class Login extends React.Component{
 
  constructor(props){
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);

  }

  requestAuth(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
    }
    login(credentials).then(data=>{
      this.props.dispatch(actions.login(data.jwt));
      this.props.dispatch(push('/'));//hacia dónde nos tiener que redireccionar
    }).catch(console.log);
  }

  createAccount(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
    }
    signUp(credentials).then(console.log).catch(console.log);
  }

  render(){
    return(
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
          <Container>
            <div style={{"textAlign": "left"}}>
              <Title />
              <TextField
                floatingLabelText="Correo electrónico"
                type="email"
                className="textfield"
                ref="emailField"
              />
              <TextField
                floatingLabelText="Contraseña"
                type="password"
                className="textfield"
                ref="passwordField"
              />
              <div className="Login-actions">
                <Route path="/login" exact render={()=>{
                  return (
                    <div>
                      <Link to="/signup" style={{"marginRight": "1em"}}>Crear nueva cuenta</Link>
                      <RaisedButton onClick={this.requestAuth} label="Ingresar" secondary={true}/>
                    </div>
                  );
                }}></Route>
                <Route path="/signup" exact render={()=>{
                  return (
                  <div>
                    <Link to="/login" style={{"marginRight": "1em"}}>Ya tengo cuenta cuenta</Link>
                    <RaisedButton onClick={this.createAccount} label="Registrarse" secondary={true}/>
                  </div>
                  );
                }}></Route>
              </div>
            </div>
          </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div>
            <Route path="/login" exact render={()=>{
              return (
                <div className="Login-background" 
                style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/login-background.jpeg'+")"}}>
                </div>
              );
            }}></Route>
            <Route path="/signup" exact render={()=>{
              return (
                <div className="Login-background" 
                style={{'backgroundImage': "url("+process.env.PUBLIC_URL + '/images/friends.jpeg'+")"}}>
                </div>
              );
            }}></Route>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)