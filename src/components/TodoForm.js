import React from "react";
import Todo from './Todo'
class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            input:""
        }
    }

    handleChanges= e =>{
        this.setState({
            input:e.target.value
        })
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        const newToDolist={
            name:this.state.input
            }
            console.log(newToDolist);
    }



    render(){
        return(
            <div>
                <Todo todos={this.props.todos}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type="text" name="whattodo"/>
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;