import React from 'react';

const Todos = ({todos, addTodo}) => {
    console.log('todos')
    return (
        <div>
            {todos.map((todo, index)=><div key={index}>{todo}</div>)}
            <button onClick={addTodo}>ADDTODO</button>
        </div>
    );
};

export default Todos;
