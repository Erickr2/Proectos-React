import React from 'react'
import { TodoItem } from './TodoItem'

/* pasamos nueestros todos en las props y le decimos que si no le pasan algun todo sea un arreglo vacio */
export const TodoList = ({todos =[], onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {

        todos.map( todo => ( //todoItem para renderizar el que queremos
          <TodoItem 
          key={todo.id} 
          todo={ todo } 
          onDeleteTodo={ onDeleteTodo }
          onToggleTodo={ onToggleTodo }
          /> /* pasamos el key: que va a ser el id y el TODO con el que vamos a trabjar */
          
        ))

      }
    </ul>
  )
}
