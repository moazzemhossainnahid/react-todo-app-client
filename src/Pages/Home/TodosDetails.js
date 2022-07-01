import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const TodosDetails = ({ data, refetch }) => {
    const { _id, title, details, date, role } = data;
    const navigate = useNavigate();

    const handleDeleteToDo = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://react-todo-app-nhd.herokuapp.com/todo/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                refetch();
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });


    }

    const handleCompleteToDo = (id) => {

        
        swal({
            title: "Are you sure to Complete?",
            text: "Once Completed, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://react-todo-app-nhd.herokuapp.com/todo/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                swal("Poof! Your imaginary file has been Completed!", {
                                    icon: "success",
                                });
                                refetch();
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }


    return (

        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
                <h4 className={ role === 'completed' ? 'line-through text-gray-800 dark:text-gray-100 font-bold mb-3' : `text-gray-800 dark:text-gray-100 font-bold mb-3`}>{title}</h4>
                <p className={ role === 'completed' ? `line-through text-gray-800 dark:text-gray-100 text-sm` : `text-gray-800 dark:text-gray-100 text-sm`}>{details}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                    <p className="text-sm">{date}</p>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-800 dark:bg-green-500 hover:dark:bg-slate-100  dark:text-gray-800 text-white flex items-center justify-center">
                            <button onClick={() => { handleCompleteToDo(_id) }} ><FontAwesomeIcon className='px-1' icon={faCheck} /></button>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-800 dark:bg-rose-500 hover:dark:bg-slate-100 dark:text-gray-800 text-white flex items-center justify-center">
                            <button onClick={() => { handleDeleteToDo(_id) }} ><FontAwesomeIcon className='px-1' icon={faTrash} /></button>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 hover:dark:bg-blue-500  dark:text-gray-800 text-white flex items-center justify-center">
                            <button onClick={() => { navigate(`/todo/${_id}`) }} ><FontAwesomeIcon className='px-1' icon={faEdit} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TodosDetails;