import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Uploader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      file: {
        name: ''
      }
    }
    this.openInput = this.openInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  openInput(){
    this.refs.file.click();
  }

  handleFile(event){
    let file = event.target.files[0];//los inputs tipo file siempre devuelven un arreglo
    if(!file) return;
    //console.log(file);
    this.setState({
      file: file
    });
  }

  render(){
    return(
      <div>
        <input type='file' ref="file" style={{'display': 'none'}} onChange={this.handleFile} />
        <span style={{'marginRight': '0.5em'}}>{this.state.file.name}</span>
        <RaisedButton label={this.props.label} primary={true} onClick={this.openInput}/>
      </div>
    );
  }
}
