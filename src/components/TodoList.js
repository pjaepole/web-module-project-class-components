// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';
function TodoList(props){
    return(
        <div>
            
          {props.tasks.map(task=>{
            return <Todo task={task} toggleHandler={props.toggleHandler}/>
            // <p onClick={()=>props.toggleHandler(task.id)} key={task.id}>{task.task}</p>
          })}
        </div>
    )
}

export default TodoList;