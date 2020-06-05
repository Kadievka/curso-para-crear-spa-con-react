import React from 'react';
import Emoji from './Emoji';
import {emojis, relation} from './emojis';
import { element } from 'prop-types';

export default class EmojiPicker extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      emojis: emojis
    }
    this.emojiSelected = this.emojiSelected.bind(this);
  }


  buildEmojis(){
    return this.state.emojis.map(short_code => <Emoji code={short_code} onClick={this.emojiSelected}/> );
  }

  emojiSelected(code){
    const reaction = relation[code];
    let emojisReordered = [code].concat(emojis.filter(element=>element!=code));
    this.props.onSelect(reaction);
    this.setState({
      emojis: emojisReordered
    });
  }
  
  render(){
    return(
      <div>
        <ul>
          {this.buildEmojis()}
        </ul>
      </div>
    );
  }
}