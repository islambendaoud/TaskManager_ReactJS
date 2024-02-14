import React from 'react';
import '../assets/style/priorityLevel.css';

export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
    this.onoff = this.fullonoff.bind(this) ;
  }
  /*on off of the prio level (yellow or red )*/
  fullonoff(){
    this.props.fnc() ;
  }
  render(){
    if(this.props.st){
      return(
        <div className ="on" onClick ={this.onoff}>  </div>
      ) ;
    }
    return(
      <div className="off" onClick ={this.onoff}>  </div>
    ) ;
  }
}
