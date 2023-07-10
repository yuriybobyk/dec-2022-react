import React, {useCallback, useState} from 'react';
import Todos from "./Todos";



const UseCallBack = () => {

    const [todos, setTodos] = useState(['newTodo']);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(()=>{
        setTodos(prevState => [...prevState, 'newTodo'])
    },[])



    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>Count:{count}</div>
            <button onClick={()=>setCount(prevState => ++prevState)}>INC</button>
        </div>
    );
};

export default UseCallBack;
