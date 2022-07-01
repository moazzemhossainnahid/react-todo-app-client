import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CompleteDetails = ({data, refetch}) => {
    const {title, details, date, role } = data;
    return (
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 mx-auto py-5 px-4">
            <div>
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{title}</h4>
                <p className="text-gray-800 dark:text-gray-100 text-sm">{details}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                    <p className="text-sm">{date}</p>
                        <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-800 dark:bg-green-500 hover:dark:bg-slate-100  dark:text-gray-800 text-white flex items-center justify-center">
                            <FontAwesomeIcon className='px-1' icon={faCheck} />
                        </div>
                        <h3 className="text-white font-semibold">{role}</h3>
                        </div>
                       
                </div>
            </div>
        </div>
    );
};

export default CompleteDetails;