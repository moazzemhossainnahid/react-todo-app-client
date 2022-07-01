import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Form = () => {
    const { register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        
        const title = data.title;
        const details = data.details;
        if(title.length > 0 && details.length > 0){
        reset();
        }else{
            toast("Please Enter Title & Description Properly.")
        }

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

        const todo = {
            title: title,
            details: details,
            date: date
        }

        fetch(`https://react-todo-app-nhd.herokuapp.com/todos`,{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Task Added Successfully.')
            }
        })



    };

    return (
        <div className='w-full h-screen bg-rose-500 flex justify-center items-center'>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-white text-2xl font-bold pb-16">What's The Plan for Today ?</h3>
            <input className='block w-full text-sm text-gray-700 my-3 mx-auto rounded p-2' placeholder='Enter Title Here' {...register("title")} type="text" />
            <textarea className='block w-full text-sm text-gray-700 resize-none my-3 mx-auto rounded p-2 resuze-none' placeholder='Enter Description Here' {...register("details")} rows="4" cols="50"></textarea>
            <input className='bg-gray-700 cursor-pointer px-7 py-2 rounded-lg text-white font-semibold' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default Form;