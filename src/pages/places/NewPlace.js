import React from 'react';
import {connect} from 'react-redux';
import Container from '../../components/Container';
import Title from '../../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';

const textStyles = {
  width: '100%'
}

class NewPlace extends React.Component{
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
    places: state.places
  }
}

export default connect(mapStateToProps)(NewPlace)