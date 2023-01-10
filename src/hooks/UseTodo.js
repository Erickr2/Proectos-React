import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/useReducer/todoReducer";


//funcion para recuperar lo que hay en localstorage 
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];  //parse es lo contrario a stringify, es decir convierte los strings en un arreglo 
 } 


 //arreglo de objetos
const initialState = [
    /* {
      id: 1,
      desc: 'recoletar horocrux diadema',
      done: false,
    }, */ 
  ];
  

export const UseTodo = () => {

    
  //hook useReducer: arreglo que tiene mi estado y el despachador de acciones, recibe mi funcion todoReducer y mi estado inicial
  const [todos, dispatch] = useReducer(todoReducer, initialState, init); //init es mi funcion para dejar mis todos en pantalla 

  //una vez que mandemos el nuevo TODO queremos qe se guarde en el local storage, por lo que vamos a disparar un efecto cada que cambien los TODOS es decir; cada que se agrege uno nuevo 
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos || []))//mandamos mis TODOS al localstorage; NOTA: solo se mandan strings por eso stringigy 
  }, [todos])
  

  const handleNewTodo = (todo) => { //funcion que recibe un nuevo TODO y lo agrega a las tareas por hacer
    const action = {   /* declaro el objeo que voy a mandar; una nueva tarea  */
      type: 'add todo', //le doy el tipo de accion; que es agregar un nuevo TODO
      payload: todo //y el payload: que es la ccion que va  a hacer, en este caso; agregar el todo
    }

    dispatch(action); //dispatch me ayuda a enviar la accion que quiero realizar
  }

  //funcion para elimiar  un TODO, definimos directo dentro del dispatch la action. 
  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'remove todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'toggle todo',
      payload: id
    })
  }

  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    PendingTodosCount: todos.filter( todo => !todo.done).length, /* paso todos, filtro cada todo y reviso el tamaño de los que no estan en false */
    TodosCount: todos.length, /* reviso el tamaño de mi arreglo de todos  */

  }
  
}
