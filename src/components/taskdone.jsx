import React from 'react';
import '../assets/style/task.css';
export default class TaskDone extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="task">{this.props.tsk.description}({this.props.tsk.duration})</div>);
  }
}
