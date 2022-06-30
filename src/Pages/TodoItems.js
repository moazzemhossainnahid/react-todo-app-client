import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const TodoItems = ({todos, setTodos}) => {
const [completed, setCompleted] = useState(false);
    const handleComplete = ()=>{
        
        const proceed = window.confirm("You Want to Complete This..?");
        if(proceed){
            setCompleted(!completed);
            toast.success("Your Task Is Completed");
        }
                
            };

    const handleDelete = ({id})=>{
        const proceed = window.confirm("Are You Sure For Deletion..?");
        if(proceed){
            setTodos(todos.filter(todo => todo.id !== id));
            toast.error("Your Task Has Been Deleted");
        }
    }

    return (
        <div>
            {todos.map(todo => (
                <div className="bg-white rounded p-2 m-2" key={todo.id}>
                    <div className="w-3/4 p-2 bg-slate-400 rounded mx-auto ">
                    <h3 style={{overflowWrap: 'break-word'}} className={completed ? `line-through font-semibold py-2 text-black` : `font-semibold py-2 text-black`}>{todo.title}</h3>
                    <div className="px-10"><hr /></div>
                    <p style={{overflowWrap: 'break-word'}} className={completed ? `line-through text-rose-700` : `text-rose-700`}>{todo.details}</p>
                    </div>
                    <div className="flex justify-around items-center my-3">
                        <button className="flex justify-center items-center px-3 py-2 bg-green-500 rounded-full mx-2" onClick={()=>handleComplete()}><FontAwesomeIcon size='2x' color='crimson' icon={faCheckCircle}/><span className="pl-2 font-bold text-xl">Complete</span></button>
                        <button className="flex justify-center items-center px-3 py-2 bg-rose-500 rounded-full mx-2" onClick={()=>handleDelete(todo)}><FontAwesomeIcon size='2x' color='white' icon={faTrash}/><span className="pl-2 font-bold text-xl">Delete</span></button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoItems;