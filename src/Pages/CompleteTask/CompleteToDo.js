import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Loading';
import CompleteDetails from './CompleteDetails';

const CompleteToDo = () => {

    const { isLoading, data, refetch } = useQuery('todos', () =>
    fetch('http://localhost:5000/completed')
        .then(res => res.json())
)

if (isLoading) {
    return <Loading />
}

refetch();

    return (
        <div>
        <div className="mx-auto container py-20 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full">
                    {
                        data.map((data) => <CompleteDetails data={data} key={data._id} refetch={refetch} />)
                    }
            </div>
        </div>
    </div>
    );
};

export default CompleteToDo;