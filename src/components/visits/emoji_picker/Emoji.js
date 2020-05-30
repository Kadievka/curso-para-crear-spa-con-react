import React from 'react';
import emojione from 'emojione';

const Emoji = (props)=>{
  return (
    <div>
      {/* {emojione.shortnameToImage(":heart:")} */}
      <img class="emojione" alt="❤" title=":heart:" src="https://cdn.jsdelivr.net/emojione/assets/4.5/png/32/2764.png"/>
    </div>
  );
}

export default Emoji;