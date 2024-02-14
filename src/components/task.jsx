import React from 'react';
import '../assets/style/task.css';
import DoneBtn from './donebtn.jsx'
import PriorityScale from './priorityScale.jsx' ;
export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.changeprio = this.changeprio.bind(this) ;
  }
  /* a function that uses update of the class taskApp to update the prio of a task
  to number passer as a parameter x */
  changeprio(x){
    this.props.update(this.props.tsk.id , x) ;
  }
  render(){
    return(
      <div className="task">{this.props.tsk.description}({this.props.tsk.duration})
      <PriorityScale prio = {this.props.tsk.prio} change = {this.changeprio}/>
      <DoneBtn className = "doneButton" finishtask = {this.props.finishtask} tsk = {this.props.tsk} />
      </div>);
  }
}
