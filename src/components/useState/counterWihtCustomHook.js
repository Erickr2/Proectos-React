import React from 'react';
import { UseCounter } from '../../hooks/UseCounter';
import './counter.css';

//funcion principal
export const CounterWihtCustomHook = () => {

  //aqui llamamos a nuestra funcion "UseCounter" y recibimos unos argumentos xon ayuda de desestructuracion
  const {State,increment,decrement,reset} =  UseCounter(100);// le pasamos como valor inicial 100

  return (
    <>

    <h1>contador with Hook: {State}</h1> {/* le pasamos el valor que recibimos en la funcion de arriba */}
    <hr />

    {/* le pasamos el evento onClick con mi funcion del componente UseCounter */}
    <button onClick={ () => increment(2) } className='btn'>+1</button>
    <button onClick={ reset } className='btn'>reset</button>
    <button onClick={ () => decrement(2) } className='btn'>-1</button>

    </>
  )
};


