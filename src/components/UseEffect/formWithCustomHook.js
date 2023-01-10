import React, { useEffect } from 'react';
import { Useform } from '../../hooks/Useform';

import './styles.css';

//funcion principal
export const FormWithCustomHook = () => {

//controlamos los cambios de estado, mi estado inicial tiene un objeto que recibe 'name' y 'email' 
  const [Formvalues, handleInputChange] = Useform({ /* le pasamos nuestro customhook Useform  y camiamos los argumentos y e le pasamos nuestro controlador*/
    name: '',
    email:'',
    password:''
  });

  //desestrcuturamos los valores y se los asignamos a nuestro controlador de estado(FormState)
  const {name,email,password} = Formvalues; /* ahora asignamos el objeto a formValues */

useEffect(() => {
  console.log('email cambio')
}, [email])


const handleSubmit = (e) => {
  e.preventDefault();

  console.log(Formvalues)
}


  return (
  <form onSubmit={ handleSubmit }>
  
  <div>FormWithCustomHook</div>
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

  <div className='form-group'>
    <input
    type='password'
    name='password'
    className='form-control'
    placeholder='******'
    value={password}
    onChange={ handleInputChange }  /* cunado cambie el estado llama a mi controlador de evento */
    />
  </div>

  <button type="submit" className='btn btn-primary'>
    gaurdar
  </button>
  

  </form>);
};
