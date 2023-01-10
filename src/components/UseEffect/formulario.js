import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './styles.css';

//funcion principal
export const Formulario = () => {

//controlamos los cambios de estado, mi estado inicial tiene un objeto que recibe 'name' y 'email' 
  const [FormState, setFormState] = useState({
    name: '',
    email:''
  });

  //desestrcuturamos los valores y se los asignamos a nuestro controlador de estado(FormState)
  const {name,email} = FormState;

  //se dispara el evento la primera vez que se renderiza mi componente
  useEffect( () => {
    console.log('hey!');
  }, []); /* le pasamos un arreglo vacio como segundo argumetno para que solo se dispare una vez el efecto */

//escucha los cambios que hay en mis 2 inputs
  useEffect( () => {
    console.log('cambio formstate');
  }, [FormState]); 

//escucha los cambios que existen en el input email
  useEffect( () => {
    console.log('cambio email');
  }, [email]); //se dispara una sola vez, cada que cambie el input(emial)

  //controlador de los cambios en el input, recibe el objeto del evento(target)
  const handleInputChange = ({ target }) => {
    /* modificador de estado, inyectamos los valores de mi FormState */
    setFormState({
      ...FormState,
      [target.name]: target.value  /*obtenesmos del evento que esta ocurrindo el name/ target.value hace referencia al valor que me mandan  */
    })
  }

  return (
  <>
  
  <div>UseEffect</div>
  <hr />

  <div className='form-group'>
    <input
    type='text'
    name='name'
    className='form-control'
    placeholder='chuchito perez'
    autoComplete='off'
    value={name}
    onChange={ handleInputChange }  /* cunado cambie el estado llama a mi controlador de evento */
    />
  </div>


  <div className='form-group'>
    <input
    type='text'
    name='email'
    className='form-control'
    placeholder='@gmail.com'
    autoComplete='off'
    value={email}
    onChange={ handleInputChange }  /* cunado cambie el estado llama a mi controlador de evento */
    />
  </div>

   {/* le decimos que si el nombre existe y es completamente igual a '123', mande a llamar mi funcion Message */}
  { (name === '123') && <Message />}


  

  </>);
};
