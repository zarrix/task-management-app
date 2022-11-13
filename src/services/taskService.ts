import { ITodo } from "../types";
import axios from 'axios'

export const apiUrl = 'https://jsonplaceholder.typicode.com';

export async function getTasks(): Promise<ITodo[]> {


    // const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    //     method: "GET"
    // })

    // const tasks = await response.json()

    const response = await axios.get(`${apiUrl}/todos`)

    const tasks = response.data

    return tasks;
}

export async function addTask(todo: ITodo) : Promise<ITodo> {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(todo)
    // })

    // const createdTodo = await response.json()

    const createdTodo = (await axios.post(`${apiUrl}/todos`, todo)).data

    return createdTodo;
}