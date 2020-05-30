import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Visit from './Visit';

export default class VisitsCollection extends React.Component{

  constructor(props){
    super(props);
    this.visits = this.visits.bind(this);
  }

  visits(){
    if(this.props.visits.length<1) return;
    return this.props.visits.map(visit=><Visit visit={visit}/>);
  }
    
  render(){
    return(
      <div>
        <TransitionGroup>
          {this.visits()}
        </TransitionGroup>
      </div>
    );
  }
}