import React from 'react';
import '../assets/style/doneButton.css';
export default class DoneBtn extends React.Component {
  constructor(props) {
    super(props);
    this.finished = this.finished.bind(this);

    }
    /* uses the function finishtask of the props to change the placement of our task from list of tasks to the list of the finished tasks */
    finished(){
      this.props.finishtask(this.props.tsk) ;
    }
    render(){
      return <div className="doneButton" onClick ={this.finished}> ✓ </div>
    }
}
