import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ITodo } from '../types'

type Props = {
    todo: ITodo
    deleteTodo: Function,
    completeTodo: Function
}

const TodoCard = ({ todo, deleteTodo, completeTodo }: Props) => {

    return (
        <div className='w-full max-w-3xl bg-gray-200 border border-black  h-20 rounded p-5 flex justify-between items-center'>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => completeTodo(todo.id)}
                    className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                />

                <Link to={`/tasks/${todo.id}`}>
                    <label htmlFor="default-checkbox" className="ml-2 text-lg font-medium text-gray-900 hover:text-red-500 hover:cursor-pointer ">{todo.title}</label>
                </Link>
            </div>
            <div>
                <button className='w-10'><img src="https://img.icons8.com/color/48/null/add--v1.png" /></button>
                <button
                    className='w-10'
                    onClick={() => deleteTodo(todo.id)}
                >
                    <img src="https://img.icons8.com/color/48/null/delete-forever.png" />
                </button>
            </div>
        </div>
    )
}

export default TodoCard;