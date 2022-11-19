import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { addTodo } from '../store/reducers/todos'
import Item from './Item'


const Todos = () => {
    const [addInput, setAddInput] = useState("")
    const todos = useAppSelector((state) => state.todo.todos)
    const dispatch = useAppDispatch()

    const add = () => {
        if (!addInput) return
        dispatch(addTodo(addInput))
        setAddInput("")
    }
    return (
        <>
            <h1 className='header'>
                Тодо листь
            </h1>
            <h3 className='header'>
                Кол-во: {todos.length}
            </h3>
            <input className='input_add' value={addInput} onChange={e => setAddInput(e.target.value)} placeholder="Писать туть..." />
            <button className='button add_button' onClick={add}>Добавить</button>
            {todos.map(todo => (
                <Item
                    key={todo.id}
                    todo={todo}
                />
            ))
            }
        </>

    )
}

export default Todos;
