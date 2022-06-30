import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import TodoItems from './TodoItems';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className='bg-rose-900 rounded-lg drop-shadow-2xl w-2/3 md:w-1/3 h-5/6 overflow-y-scroll'>
            <Header/>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoItems todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default TodoList;