import React from 'react';

import '../assets/style/tasklist.css';
import '../assets/style/task.css';
import Task from './task.jsx' ;
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.filterValueChanged = this.filterValueChanged.bind(this) ;
    this.sumofduration = this.sumofduration.bind(this)  ;
  }
  /* every time we change what's written in the input of the filter we change the state of filter in the taskApp
  so here we call the function filterChanged of taskApp */
  filterValueChanged(event){
    this.props.filterChanged(event.target.value) ;
  }
  /* the sum of durations */
  sumofduration(mylist){
    return mylist.reduce((prev,next)=> prev + next.duration , 0 ) ;
  }
  render(){
    /* we start be filtering all the tasks so we get only what we need */
    let tasksfiltered = this.props.tasks.filter(tsk => tsk.description.toLowerCase().includes(this.props.filterText.toLowerCase()) );
    /*sort them by their prio with the predefined function of JS sort */
    let filteredAndSorted = tasksfiltered.sort((a,b) => b.prio - a.prio) ;
    /* creat task components of the filtered and sorted tasks  */
    let mytasks = filteredAndSorted.map(tsk => <Task update = {this.props.update} tsk={tsk} key ={tsk.id} finishtask = {this.props.finishtask}/>) ;
    /* creating sum of the filtered tasks since the sum would change after filtering  */
    let k = this.sumofduration(tasksfiltered) ;
    return (
      <div className = "tasklist">
      <input
      key="search"
      id="filtre" type="text" placeholder="filtre tasks..."
      defaultValue=''
      onChange = { this.filterValueChanged }
      />
      <p> il ya {mytasks.length} taches en cours . Pour une durée de {k}</p>
      {mytasks}
      </div>
    ) ;
  }
}
