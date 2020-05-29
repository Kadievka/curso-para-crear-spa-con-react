import React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import VisitModal from './VisitModal';
import * as actions from '../../actions/visitsActions';

class VisitForm extends React.Component{
  constructor(props){
    super(props);
    this.openVisitModal = this.openVisitModal.bind(this);
    this.add = this.add.bind(this);
  }
  
  openVisitModal(){
    this.refs.modalRef.openModal();
  }

  add(observation){
    this.props.dispatch(actions.addVisit(this.props.place, observation));
  }

  render(){
    return(
      <div>
        <VisitModal
          place={this.props.place} ref="modalRef"
          onSubmit={this.add}
        />
        <FlatButton
          onClick={this.openVisitModal}
          label="Agregar un nuevo comentario"
          secondary={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{

  };
}

export default connect(mapStateToProps)(VisitForm);