import React from 'react';
import FadeAndScale from '../animations/FadeAndScale';
import {Card, CardText, CardHeader, CardTitle, CardActions} from 'material-ui/Card';
import { relationInverse } from './emoji_picker/emojis';
import Emoji from './emoji_picker/Emoji';

export default class Visit extends React.Component{

  getShortCode(){
    if(!this.props.visit.reaction) return relationInverse["love"];
    return relationInverse[this.props.visit.reaction];
  }
  
  render(){
    return(
      <FadeAndScale in={this.props.in}>
        <div>
          <Card style={{'textAlign':'left', 'marginTop': '1em'}}>
            <div className="row middle-xs">
              <div className="col-xs">
                <CardHeader
                  title={this.props.visit._user}
                  subtitle={this.props.visit.observation}
                  avatar={'https://res.cloudinary.com/doekkaztw/image/upload/v1590711900/ml5iljzjf1hb8rqizj90.png'}
                >
                </CardHeader>
              </div>
              <div className="col-xs-2 col-sm-1">
                <Emoji code={this.getShortCode()}/>
              </div>
            </div>
          </Card>
        </div>
      </FadeAndScale>
      );
  }

}