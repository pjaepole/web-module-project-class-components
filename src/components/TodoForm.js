import React from "react";
import Todo from './Todo'

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            input:"",
            todotodo:[]
            

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
            name:this.state.input,
            id: Date.now(),
            completed:false
        }
        this.setState({
            ...this.state,
            todotodo:[...this.state.todotodo, newToDolist]
        })
        this.setState({
            input:""
        })
    //    this.setState({
    //        ...this.props.todos,
    //        todos:[...this.state.todos, newToDolist]
    //    })
    //    console.log('what is this',this.props.todos)
    }

  

    render(){
        return(
            <div>
                {console.log(this.state.todotodo)}
                <Todo todos={this.state.todotodo}/>
                {/* <p>{this.props.todos[0].name}</p> */}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type="text" name="whattodo" value={this.state.input}/>
                    <button>Add Todo</button>
                    <button onClick={console.log("clicked clear button")}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;