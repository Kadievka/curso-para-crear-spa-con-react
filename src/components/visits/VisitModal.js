import React from 'react';
import Modal from 'react-modal';
import Container from '../Container';
import Title from '../Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { yellow700 } from 'material-ui/styles/colors';
import EmojiPicker from '../visits/emoji_picker/EmojiPicker';

export default class VisitModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.submit = this.submit.bind(this);
    this.emojiSelected = this.emojiSelected.bind(this);
  }

  closeModal(){
    this.setState({
      open:false
    });
  }

  openModal(){
    this.setState({
      open:true
    });
  }

  submit(){
    const observation = this.refs.observationField.getValue();
    this.props.onSubmit(observation, this.state.reaction);
    this.closeModal();
  }

  emojiSelected(reaction){
    //console.log(reaction);
    this.setState({
      reaction: reaction
    });
  }

  render(){
    return (
      <div>
        <Modal
          isOpen={this.state.open}
        >
          <Container>
            <div style={{'textAlign': 'left', 'marginTop': '2em'}}>
              <header>
                <Title/>
                <h2>
                  Cuéntanos de tu visita a 
                  <span style={{'backgroundColor':yellow700, 'margin':'0 0.3em'}}>{this.props.place.title}</span>
                </h2>
              </header>
              <div className="row">
                <div className="col-xs-4 col-sm2 col-lg-1">
                  <EmojiPicker onSelect={this.emojiSelected}/>
                </div>
                <div className="col-xs">
                  <TextField
                    floatingLabelText="Cuéntanos qué te pareció este lugar"
                    ref="observationField"
                    multiLine={true}
                    style={{'width':'100%'}}
                  />
                  <div style={{'marginTop': '1em'}}>
                    <RaisedButton
                      label="Enviar"
                      secondary={true}
                      onClick={this.submit}
                    />
                    <FlatButton
                      label="Cancelar"
                      style={{'marginLeft': '2em'}}
                      onClick={this.closeModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Modal>
      </div>
    );
  }
}