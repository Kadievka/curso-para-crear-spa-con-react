import React from 'react';
import Emoji from './Emoji';

export default class EmojiPicker extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><Emoji/></li>
        </ul>
      </div>
    );
  }
}