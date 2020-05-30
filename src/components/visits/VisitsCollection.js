import React from 'react';
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
        {this.visits()}
      </div>
    );
  }
}