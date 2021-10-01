import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      input:"",
      tasks:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  inputChangeHandler=(e)=>{
    // console.log(e.target.value)
    this.setState({
      ...this.state,
      input: e.target.value
    })
    console.log(this.state.input)
  }

  submitformHandler=(e)=>{
    e.preventDefault();
    const newTask={
      task:this.state.input,
      id:Date.now() ,
      completed:false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks,newTask],
      input:""
    })
   
  }
   toggleHandler=(id)=>{
    // console.log('you clicked toggle')
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task=>{
        if(id===task.id){return{
          ...task,
          completed:!task.completed
        } 
      }else{return task}}
    )
  })
   }

   clearHandler=(e)=>{
    e.preventDefault();
    console.log('you clicked clear button')
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task=>{
        return(task.completed===false)
      })
    })
   }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        
        <TodoList toggleHandler={this.toggleHandler} tasks={this.state.tasks}/>
        <TodoForm inputChangeHandler={this.inputChangeHandler} submitformHandler={this.submitformHandler} clearHandler={this.clearHandler} value={this.state.input}/>
      </div>
    );
  }
}

export default App;
