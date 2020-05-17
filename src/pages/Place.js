import React from 'react';
import {Card} from 'material-ui/Card';
import Container from '../components/Container';
import {getPlace} from '../requests/places';

import {
  withRouter
} from 'react-router-dom';



class Place extends React.Component{
  constructor(props){
    super(props);
    const slug = props.match.params.slug;

    this.loadPlace(slug);

    this.state = {
      place:{}
    }
  }

  loadPlace(slug){
    getPlace(slug).then(json=>{
      console.log(json);
      this.setState({
        place: json
      });
    })
  }
  
  render(){
    return(
      <div className="Place-container">
        <header 
        className="Place-cover" style={{'backgroundImage': 'url(' + this.state.place.coverImage + ')'}}>
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-Card">
                
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img src={this.state.place.avatarImage}
                      style={{"maxWidth": "100%"}}
                    />
                  </div>
                  <div className="col-xs">
                    <h1>{this.state.place.title}</h1>
                    <address>{this.state.place.address}</address>
                    <p>{this.state.place.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Place);