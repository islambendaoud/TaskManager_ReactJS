import React from 'react';
import '../assets/style/tasklist.css';
import TaskDone from './taskdone.jsx'
export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {affiche : false } ;
    this.affiche = this.affiche.bind(this) ;
  }
  /* changes the state of affiche if it's true makes it false and if it's false makes it's true */
  affiche(){
    this.setState(prevState => ({
  affiche: !prevState.affiche
    }));
  }
  render(){
    let mytasks = this.props.tasks.map(tsk => <TaskDone tsk={tsk} key ={tsk.id} />) ;
    if (this.state.affiche === false ) {
      /*here is the affiche were false we don't display the tasks and if we click on the + button
      it changes to true so it displays it and the + changes to - */
      return (
      <div className = "tasklist">
      Taches Terminées
      <button onClick = {this.affiche} > +({this.props.tasks.length}) </button>
      </div>
    );
  }
    return(
      <div className = "tasklist">
      Taches Terminées
      <button onClick = {this.affiche} > - </button>
      {mytasks}
      </div>
    );
 }
}
