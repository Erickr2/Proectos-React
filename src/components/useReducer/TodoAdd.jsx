import React from 'react'
import { Useform } from '../../hooks/Useform'

export const TodoAdd = ({onNewTodo}) => { //recibe uuna la funcion de nu nuevo todo

  /* llamamos a mi Hook que me ayuda a controlar el estado de un form, recibimos una descripcion que viene de mi todo, el controladore del cambio del input  y el reste del form */
  const {desc, onInputChange, onResetForm} = Useform({
    desc:''
  })

  //creamos funcion para controlar el submit de mi form, recibimos el evento e
  const onSubmitForm = (e) =>{ 
    e.preventDefault(); //paramos el evento 
    if(desc.length <= 1) return; //condicionamos para que no valla vacia la descripcion 

    /* creamos un nuevo objeto TODO */
    const NewTodo = {
      id: new Date().getTime(),
      done: false, 
      desc, //el valor de la descripcion es el mismo ya que tienen el mismo nombre
    }

    onNewTodo(NewTodo) //mando a llamar mi funcion onNewTodo y le mando mi nuevo todo
    onResetForm() //limpia la caja cuando se manda un nuevo todo
  }

  return (
    /* como solo regresamos el form no hace falta porne el fragment <> </> */

    <form onSubmit={onSubmitForm}> {/* le digo qe cuando haga submit el form, llame mi funcion onSubmitForm */}

    <input
      type="text"
      placeholder="¿que hay que hacer?"
      className="form-control"
      name='desc' //obtenemos el valor de la descripcion de mi TODO
      value={desc} //le pasamos el valor que obtuvimos del name 
      onChange={onInputChange} //controlador de mi evento 
    />

    <button
      type="submit"
      className='btn btn-outline-primary mt-2'
    >
      agregar tarea
    </button>

  </form>

  )
}
