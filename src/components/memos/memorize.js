import React, { useState } from 'react'
import { UseCounter } from '../../hooks/UseCounter'
import '../UseEffect/styles.css'
import { Small } from './Small';

export const Memorize = () => {


    const [Show, setShow] = useState(true);
    const {Counter, increment } = UseCounter(10);  //custom hook para contar: extraigo el estdo incial(contador) y el incremento 

  return (
    <>
    <h1>counter: <Small value={Counter} /></h1> {/* le pasamos nuestra funcion que viene de Small.js y le mandamos el valor  */}
    <hr />
    
    <button
    className='btn btn-primary'
    onClick={increment}
    >
        incrementar
    </button>

 <button
 className='btn btn-primary mx-3'
 onClick={ () => {  //pasamos una funcion, que modifica mi estado 
     setShow(!Show)
 }}
>
    show/hide {JSON.stringify( Show )}{/* mostramos lo que hay en show */}
</button>

    </>
  )
}
