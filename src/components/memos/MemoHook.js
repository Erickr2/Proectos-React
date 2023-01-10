import React, { useMemo, useState } from 'react'
import { procesoP } from '../../helpers/ProcesoPesado';
import { UseCounter } from '../../hooks/UseCounter'
import '../UseEffect/styles.css'


export const MemoHook = () => {


    const [Show, setShow] = useState(true);
    const {Counter, increment } = UseCounter(100);  //custom hook para contar: extraigo el estdo incial(contador) y el incremento 
    //funcion que hace iteraciones 

    //le pasamos nuestra funcion que itera con sus parametro y que solo cambie cuando cambien el contador 
   const memoProceso = useMemo(() => procesoP(Counter), [Counter]); 

  return (
    <>
    <h1>MemoHook</h1>
    <h3>counter: {Counter} </h3> {/* le pasamos nuestra funcion que viene de Small.js y le mandamos el valor  */}
    <hr />
    {/* llama mi funcion de procesoP(hace iteraciones) le mando el contador */}
    <p>{ memoProceso }</p> {/* hook memo */}
    
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
