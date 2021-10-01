import React from 'react';

class Todo extends React.Component{
    
    render(){
        return(
            <div>
        <p onClick={()=>this.props.toggleHandler(this.props.task.id)} key={this.props.task.id}>{!this.props.task.completed? this.props.task.task: this.props.task.task+"<this is done"}</p>
        </div>
        )
    }
}

export default Todo