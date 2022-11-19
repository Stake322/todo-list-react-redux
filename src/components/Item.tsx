import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/redux';
import { Todos } from '../store/reducers/todos';
import { changeTodo, deleteTodo, changeStatus, toggleToChange } from '../store/reducers/todos'

interface PropsItem {
    todo: Todos,
}

const Item = (props: PropsItem) => {
    const { todo } = props
    const dispatch = useAppDispatch()

    const [changeInput, setChangeInput] = useState("")
    const changeItem = (id: number) => {
        if (!changeInput) return
        dispatch(changeTodo({ id, description: changeInput }))
    }
    return (
        <div>
            {
                todo.changeMode
                    ?
                    <input placeholder={`${todo.description}`} onChange={e => setChangeInput(e.target.value)} />
                    :
                    <span className='description'>{todo.description}</span>
            }
            <input type='checkbox' checked={todo.done} onChange={() => dispatch(changeStatus(todo.id))} />
            <button
                className={`button ${todo.changeMode && 'change'}`}
                onClick={todo.changeMode
                    ? () => changeItem(todo.id)
                    : () => dispatch(toggleToChange(todo.id))}
            >
                Изменить
            </button>
            <button
                className='button delete'
                onClick={() => dispatch(deleteTodo(todo.id))} > Удалить </button>
        </div >
    )
}

export default Item;
