import React from 'react';
import '../assets/style/priorityScale.css';
import PriorityLevel from './priorityLevel.jsx' ;
export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
    this.change1 = this.change1.bind(this) ;
    this.change2 = this.change2.bind(this) ;
    this.change3 = this.change3.bind(this) ;
    this.change4 = this.change4.bind(this) ;
    this.change5 = this.change5.bind(this) ;
    this.change6 = this.change6.bind(this) ;

  }
  /* all the function that are used here are just specialized functions for every level of the prio
  for exapmle change1 are for the level 1  and it uses the function that defined in task (changeprio)  with parameter
  1 so it changes the prio to 1 and same thing for every function here  */
  change1(){
    this.props.change(1) ;
    }
    change2(){
      this.props.change(2) ;
    }
    change3(){
      this.props.change(3) ;
    }
    change4(){
      this.props.change(4) ;
    }
    change5(){
      this.props.change(5) ;
    }
    change6(){
      this.props.change(6) ;
    }
  render(){
    /*here it depends on the number of the prio so if it 1 we only pass true to the first to light up in red
    and same for every scale up to level 6 */
    if(this.props.prio === 1){
      return(
        <div className="scale">
        <div> <PriorityLevel fnc = {this.change1} st = {true} key = {1} /></div>
        <div><PriorityLevel fnc = {this.change2} st = {false} key = {2}/></div>
        <div><PriorityLevel fnc = {this.change3} st = {false} key = {3}/></div>
        <div><PriorityLevel fnc = {this.change4} st = {false} key = {4}/></div>
        <div> <PriorityLevel fnc = {this.change5} st = {false} key = {5}/></div>
        <div><PriorityLevel fnc = {this.change6} st = {false} key = {6} /></div>
        </div>
      );
    }
    if(this.props.prio === 2){
      return(
        <div className="scale">
        <div> <PriorityLevel fnc = {this.change1} st = {true} key = {1} /></div>
        <div><PriorityLevel fnc = {this.change2} st = {true} key = {2}/></div>
        <div><PriorityLevel fnc = {this.change3} st = {false} key = {3}/></div>
        <div><PriorityLevel fnc = {this.change4} st = {false} key = {4}/></div>
        <div> <PriorityLevel fnc = {this.change5} st = {false} key = {5}/></div>
        <div><PriorityLevel fnc = {this.change6} st = {false} key = {6} /></div>
        </div>
      );
    }
    if(this.props.prio === 3){
      return(
        <div className="scale">
        <div> <PriorityLevel fnc = {this.change1} st = {true} key = {1} /></div>
        <div><PriorityLevel fnc = {this.change2} st = {true} key = {2}/></div>
        <div><PriorityLevel fnc = {this.change3} st = {true} key = {3}/></div>
        <div><PriorityLevel fnc = {this.change4} st = {false} key = {4}/></div>
        <div> <PriorityLevel fnc = {this.change5} st = {false} key = {5}/></div>
        <div><PriorityLevel fnc = {this.change6} st = {false} key = {6} /></div>
        </div>
      );
    }
    if(this.props.prio === 4){
      return(
        <div className="scale">
        <div> <PriorityLevel fnc = {this.change1} st = {true} key = {1} /></div>
        <div><PriorityLevel fnc = {this.change2} st = {true} key = {2}/></div>
        <div><PriorityLevel fnc = {this.change3} st = {true} key = {3}/></div>
        <div><PriorityLevel fnc = {this.change4} st = {true} key = {4}/></div>
        <div> <PriorityLevel fnc = {this.change5} st = {false} key = {5}/></div>
        <div><PriorityLevel fnc = {this.change6} st = {false} key = {6} /></div>
        </div>
      );
    }
    if(this.props.prio === 5){
      return(
        <div className="scale">
        <div> <PriorityLevel fnc = {this.change1} st = {true} key = {1} /></div>
        <div><PriorityLevel fnc = {this.change2} st = {true} key = {2}/></div>
        <div><PriorityLevel fnc = {this.change3} st = {true} key = {3}/></div>
        <div><PriorityLevel fnc = {this.change4} st = {true} key = {4}/></div>
        <div> <PriorityLevel fnc = {this.change5} st = {true} key = {5}/></div>
        <div><PriorityLevel fnc = {this.change6} st = {false} key = {6} /></div>
        </div>
      );
    }
      return(
        <div className="scale">
        <div> <PriorityLevel fnc = {this.change1} st = {true} key = {1} /></div>
        <div><PriorityLevel fnc = {this.change2} st = {true} key = {2}/></div>
        <div><PriorityLevel fnc = {this.change3} st = {true} key = {3}/></div>
        <div><PriorityLevel fnc = {this.change4} st = {true} key = {4}/></div>
        <div> <PriorityLevel fnc = {this.change5} st = {true} key = {5}/></div>
        <div><PriorityLevel fnc = {this.change6} st = {true} key = {6} /></div>
        </div>
      );


  }
}
