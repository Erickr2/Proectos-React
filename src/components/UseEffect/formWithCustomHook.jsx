import React, { useEffect } from 'react';
import { Useform } from '../../hooks/Useform';
import { Message } from './Message';

import './styles.css';

//funcion principal
export const FormWithCustomHook = () => {

//extraemos formState(mi estado) y onInputChange(funcion ara anejar el form) al igual que mis demas valores ya que expandimos el estado en mi hook y permite extraer los valores directamente 
  const { onInputChange, onReset, name, email, password} = Useform({
    name:'',
    email:'',
    password: ''}
    );

    //const {name, email, password} = FormState;

  return (
    <>
    <h1> Form With CustomHook</h1>
    <hr />

   
    <input
    type='text'
    className='form-control'
    placeholder='chuchito perez'
    name='name'
    value={name}
    onChange={ onInputChange }  /* cunado cambie el estado llama a mi controlador de evento */
    />
  

 
    <input
    type='email'
    className='form-control mt-3'
    placeholder='chuchito@perez.com'
    name='email'
    value={ email }
    onChange={ onInputChange }  /* cunado cambie el estado llama a mi controlador de evento */
    />


  
    <input
    type='password'
    name='password'
    className='form-control mt-3'
    placeholder='contraseña'
    value={password}
    onChange={ onInputChange }  /* cunado cambie el estado llama a mi controlador de evento */
    />

    <button onClick={ onReset} className='btn btn-primary mt-2'> Borrar </button>

 </>
 
  )};
