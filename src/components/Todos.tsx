import React, { useEffect, useState } from 'react'
import { getTasks } from '../services/taskService';
import { ITodo } from '../types';
import TodoCard from './TodoCard'

const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [newTitle, setNewTitle] = useState('');

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const completeTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo ));
    }

    const addTodo = (title: string) => {
        if(title === '') {
            alert('Please fill the title of the task!')
        } else {
            setTodos([
                ...todos,
                { id: todos[todos.length - 1].id + 1, title, completed: false }
            ])
            setNewTitle('')
        }
    }

    useEffect(() => {
        const tasks = getTasks();
        setTodos(tasks);
    }, [])


    return (
        <div className='flex flex-col w-full p-2 space-y-2 items-center'>
            {/* List TodoCard */}
            {todos.map((todo: ITodo, index: number) =>
                <TodoCard key={index} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            )}
            {/* Add Todo */}
            <div className='w-full flex justify-between space-x-5 max-w-3xl'>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500" 
                    placeholder="Task" required 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button
                    className='py-2 px-6 bg-green-500 hover:bg-green-600 rounded text-white'
                    onClick={() => addTodo(newTitle)}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Todos