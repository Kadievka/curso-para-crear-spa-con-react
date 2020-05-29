import React from 'react';
import {Card} from 'material-ui/Card';
import Container from '../components/Container';
import {getPlace} from '../requests/places';
import {withRouter} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import VisitModal from '../components/visits/VisitModal';

class Place extends React.Component{
  constructor(props){
    super(props);
    const slug = props.match.params.slug;

    this.loadPlace(slug);

    this.state = {
      place:{}
    }

    this.openVisitModal = this.openVisitModal.bind(this);
  }

  loadPlace(slug){
    getPlace(slug).then(json=>{
      this.setState({
        place: json
      });
    })
  }

  openVisitModal(){
    this.refs.modalRef.openModal();
  }
  
  render(){
    const {place} = this.state
    return(
      <div className="Place-container">
        <VisitModal place={place} ref="modalRef"/>
        <header 
        className="Place-cover" style={{'backgroundImage': 'url(' + place.coverImage + ')'}}>
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-Card">
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
                    <FlatButton
                      onClick={this.openVisitModal}
                      label="Agregar un nuevo comentario"
                      secondary={true}
                    />
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