import React from 'react';

import '../assets/style/addtask.css';

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this) ;
    this.myRef = React.createRef() ; /*ref to the input text */
    this.state = {tasks :this.props.tasks};
    this.numRef = React.createRef(); /*ref to the num input */
    this.handleChange = this.handleChange.bind(this) ;
  }
  /* a function that hundle the changes so it picks what's written in the input side and adds it to our list of tasks with all the information needed
  as duration and description and intialize the prio level at 1
  and adds it also to the state of this class so we keep track of the number of the tasks we have
  so we use the length to determine the ID which it has to be unique*/
  handleChange(){
    let joined = this.state.tasks.concat({id:"T"+(this.state.tasks.length+1) ,description : this.myRef.current.value , duration : parseFloat(this.numRef.current.value) });
    this.setState({tasks : joined}) ;
    /* on peut aussi utiliser un state avec le nom par example numID initializé a 5 car la liste a déja 4 ID  mais j ai choisis cette méthode
    peut etre que on aura besoins de la liste des taches  */
    this.props.addtask({id:"T"+(this.state.tasks.length+1) ,description : this.myRef.current.value , duration : parseFloat(this.numRef.current.value) , prio :1 }) ;
  }
  render(){
    return(
      <div className="addTask">
      <input placeholder = "description" ref ={this.myRef} type="text"/>
      <input defaultValue = {10} ref={this.numRef} type="number"/>
      <button onClick = {this.handleChange} > Confirm </button>
      </div>

    ) ;
  }
}
