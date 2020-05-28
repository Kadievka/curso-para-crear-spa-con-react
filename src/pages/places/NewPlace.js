import React from 'react';
import {connect} from 'react-redux';
import {routerActions} from 'connected-react-router';
import Container from '../../components/Container';
import Title from '../../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import * as requests from '../../requests/places';

const textStyles = {
  width: '100%'
}

class NewPlace extends React.Component{
  
  constructor(props){
    super(props)
    this.createPlace = this.createPlace.bind(this);
  }
  
  createPlace(){
    const data = {
      title: this.refs.titleField.getValue(),
      address: this.refs.addressField.getValue(),
      description: this.refs.descriptionField.getValue()
    }
    if(!data['title']||!data['address']||!data['description']){
      alert('Por favor, llenar todos los campos');
      return null;
    }
    requests.createPlace(data, this.props.user.jwt).then(data=>{
      this.props.dispatch(routerActions.push('/lugares/'+data.slug));
    }).catch(console.log);
  }

  render(){
    return(
      <div>
        <Container>
          <Card style={{'textAlign':"left"}}>
            <header style={{'borderBottom': 'solid 2px #eee'}}>
              <Title/>
            </header>
            <TextField
              floatingLabelText="Nombre del negocio"
              ref="titleField"
              style={textStyles}
            />
            <TextField
              floatingLabelText="Dirección del negocio"
              ref="addressField"
              style={textStyles}
            />
            <TextField
              floatingLabelText="Descripción del negocio"
              ref="descriptionField"
              multiLine={true}
              style={textStyles}
            />
            <div style={{'textAlign':"right", 'marginTop': '1em'}}>
              <RaisedButton label="Guardar" secondary={true} onClick={this.createPlace}/>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NewPlace)