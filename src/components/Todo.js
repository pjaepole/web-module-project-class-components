import React from 'react';

const Todo = props =>{

// console.log(props.todos)
    return(
        <div>
            {props.todos.map(function(item,key){
                return <div key={item.name}>{item.name}</div>
            })}
            <p>this is from Todo.js</p>
        </div>
    )
}

export default Todo;