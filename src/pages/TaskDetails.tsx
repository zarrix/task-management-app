import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getTaskById } from '../services/taskService';
import { ITodo } from '../types';

type Props = {}

function TaskDetails({ }: Props) {

    const {id} = useParams();

    const [todo, setTodo] = useState<ITodo | null>(null)

    useEffect(() => {
        getTaskById(id as unknown as number).then(data => setTodo(data))
    }, [])

    return (
        <div>
            <Header />
            <div className='flex flex-col w-full p-2 space-y-2 items-center'>
                {/* List TodoCard */}
                <div className='w-full max-w-3xl bg-gray-200 border border-black  h-20 rounded p-5 flex justify-between items-center'>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={todo?.completed}
                            // onChange={() =>  completeTodo(todo.id)}
                            className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <label htmlFor="default-checkbox" className="ml-2 text-lg font-medium text-gray-900 ">{todo?.title}</label>
                    </div>
                </div>
                {/* Add Todo */}

            </div>
        </div>
    )
}

export default TaskDetails;