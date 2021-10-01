import React from 'react'

function TodoForm(props){

    return(
        <form>
            
          <input onChange={props.inputChangeHandler} value={props.value} ></input>
          <button onClick={props.submitformHandler} >add task</button>
          <button onClick={props.clearHandler}>clear completed tasks</button>
        </form>
    )
}

export default TodoForm;