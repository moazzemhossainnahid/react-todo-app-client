import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from './Loading';

const EditTodo = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();

    const {data: task, isLoading, refetch} = useQuery('todo', () => 
    fetch(`https://react-todo-app-nhd.herokuapp.com/todo/${id}`)
    .then(res => res.json()));


    if(isLoading){
        return <Loading></Loading>
    }

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
        const url = `https://react-todo-app-nhd.herokuapp.com/todo/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Wow!!Your task updated successfully!!!')
            reset();
            refetch()
        })
    };

    return (
        <div className='w-full h-screen bg-rose-500 flex justify-center items-center'>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-white text-2xl font-bold pb-16">Edit's The Plan for Today ?</h3>
            <input placeholder={`${task?.title}`} className='block w-full text-sm text-gray-700 my-3 mx-auto rounded p-2' {...register("title")} type="text" />
            <textarea placeholder={`${task?.details}`} className='block w-full text-sm text-gray-700 resize-none my-3 mx-auto rounded p-2 resuze-none' {...register("details")} rows="4" cols="50"></textarea>
            <input className='bg-gray-700 cursor-pointer px-7 py-2 rounded-lg text-white font-semibold' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default EditTodo;