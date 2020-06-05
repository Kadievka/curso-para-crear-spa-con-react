import React from 'react';
import {Card} from 'material-ui/Card';
import Container from '../components/Container';
import {getPlace} from '../requests/places';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import VisitForm from '../components/visits/VisitForm';
import * as visitsActions from '../actions/visitsActions';
import VisitsCollection from '../components/visits/VisitsCollection';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Star from 'material-ui/svg-icons/toggle/star';
import { yellow700 } from 'material-ui/styles/colors';
import * as favoritesActions from '../actions/favoritesActions';

class Place extends React.Component{
  constructor(props){
    super(props);
    const slug = props.match.params.slug;
    this.loadPlace(slug);
    this.state = {
      place:{}
    }
    this.fav = this.fav.bind(this);
  }

  loadPlace(slug){

    getPlace(slug).then(json=>{
      this.setState({
        place: json
      });
    });

    this.props.dispatch(visitsActions.loadAllForPlace(slug));

  }

  fav(){
    this.props.dispatch(favoritesActions.add(this.state.place));
  }

  favBtn(){
    return (
    <FloatingActionButton
      backgroundColor={yellow700}
      className="Fab-btn"
      onClick={this.fav}
    >
      <Star />
    </FloatingActionButton>
    );
  }

  render(){
    const {place} = this.state
    return(
      <div className="Place-container">
        <header 
        className="Place-cover" style={{'backgroundImage': 'url(' + place.coverImage + ')'}}>
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-Card">
                {this.favBtn()}
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img src={place.avatarImage}
                      style={{"maxWidth": "100%"}}
                      alt=""
                    />
                  </div>
                  <div className="col-xs">
                    <h1>{place.title}</h1>
                    <address>{place.address}</address>
                    <p>{place.description}</p>
                  </div>
                  <div style={{'marginTop': '1em'}}>
                    <VisitForm place={place}/>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-xs">
              <VisitsCollection visits={this.props.visits}/>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    visits: state.visits
  }
}

export default connect(mapStateToProps)(withRouter(Place));