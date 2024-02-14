import React from 'react';

import '../assets/style/taskApp.css';
import tasks from '../data/tasksData.js';
import AddTask from './addTask.jsx' ;
import Todo from './todo.jsx' ;
import Done from './done.jsx' ;
/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: this.addprio() ,
                  tasksfinished : [{   /* here i just added playing as a done task intialized if you want to start with 0 tasks in the done section you can delete it and chage it to [] as an empty list */
                    id : 'T100',
                    description : "jouer",
                    duration : 40
                  }] ,
                  filterText : '' } ;
    this.addtask = this.addtask.bind(this) ;
    this.filterChanged = this.filterChanged.bind(this) ;
    this.finishtask = this.finishtask.bind(this) ;
    this.addprio = this.addprio.bind(this) ;
    this.update = this.updateprio.bind(this) ;
  }
  /*to add prio attribut to every item of our list */
  addprio(){
    let finaltasks = tasks.map(tsk => ({...tsk , prio : 1 })) ;
    return finaltasks ;
  }
  /* takes as a parameter a task to add it to our list of tasks */
  addtask(task){
    let join  = this.state.tasks.concat(task);
    this.setState({tasks : join}) ;
  }
  /* we pass a task to it we add it to the finished tasks and we filter it (delete it ) from the list of tasks */
  finishtask(task){
    let finish = this.state.tasksfinished.concat(task) ;
    this.setState({tasksfinished : finish}) ;
    let filteredArray = this.state.tasks.filter(item => item !== task ) ;
    this.setState({tasks : filteredArray }) ;
  }
  /* to change the filter (the state filter )*/
  filterChanged(newFilter){
    this.setState({filterText : newFilter}) ;
  }

  /* since the id is special for every task
  we use here to find the task we want to change his prio
  than using setState we change it */
  updateprio(id,num){
    let arr = [...this.state.tasks] ;
    arr.find(tsk => tsk.id === id).prio = num ;
    this.setState({tasks : arr}) ;
  }
  render() {
    return (
      <div className="taskApp">
        Task App
          <AddTask tasks={this.state.tasks} addtask = {this.addtask}/>
          <Todo update = {this.update} tasks = {this.state.tasks} filterChanged ={this.filterChanged} filterText={this.state.filterText} finishtask ={this.finishtask}/>
          <Done tasks = {this.state.tasksfinished}/>

      </div>
    );
  }
}
