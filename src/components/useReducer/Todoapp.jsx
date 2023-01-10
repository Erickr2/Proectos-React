import React from 'react';
import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { UseTodo } from '../../hooks/UseTodo';




const Todoapp = () => {

  const {todos,handleDeleteTodo, handleNewTodo, handleToggleTodo, PendingTodosCount, TodosCount} = UseTodo();

  return(
    <>
      <h1>TodoApp: {TodosCount} <small>pendientes: {PendingTodosCount}</small> </h1>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-7">
          {/* componente que tiene nuestra lista de TODOS */}
           <TodoList 
           todos={todos}  
           onDeleteTodo={handleDeleteTodo}
           onToggleTodo={handleToggleTodo}
           /> 
           {/* funcio que viene de mi todoList que ejecuta mi funcion para borrar*/} 
           
          </div>

          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo = {handleNewTodo}/> {/*componente, cuando reciba un nuevo todo, llama mi funcion  */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Todoapp

