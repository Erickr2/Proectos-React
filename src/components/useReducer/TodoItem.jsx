
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => { /* desestructuramos el TODO con el que vamos a trabajar que viene de mi TodoList */


    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
            className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`} // aplicamos ternario para saber si mi done esta en false o true y tachar en caso de que este en true
            onDoubleClick={() => onToggleTodo(todo.id)} //asignamos un evento de doble click y le mandamos el id del todo
            >
             {todo.desc}</span> {/* obstenemos en valor de la descripcion de todo */}
            <button
            onClick={() => onDeleteTodo(todo.id)} 
            className="btn btn-danger">
            Borrar
            </button>
        </li>
    
    )

}
