import React, { useLayoutEffect, useRef } from 'react'
import { UseCounter } from '../../hooks/UseCounter';
import { Usefetch } from '../../hooks/Usefetch';
import './layout.css';

export const Layout = () => {

    const { Counter, increment} = UseCounter(1);

    const { data } =  Usefetch(` https://www.breakingbadapi.com/api/quotes/${Counter} `);

    const { quote} = !!data && data[0]; /* aqui decimos que si la data no es falsa, extraiga la data de la psoscion 0 */

    //referencia a la que quiero apuntar
    const parrafo = useRef()

    //nos sirve para capturar tamaños HTML 
    useLayoutEffect( () => {
        console.log(parrafo.current.getBoundingClientRect());
    }, [quote]); //cada que cambie la frase 

  return (
    <>
    
    <div> Breaking bad!!! </div>
    <hr />
  

    <blockquote 
    className="blockquote text-right"
    ref = {parrafo}
    >
        <p className='mb-2'> {quote} </p>
    </blockquote>

   

    <button className='
    btn btn-primary'
    onClick={increment}
    >
        siguiente frase
    </button>
    </>
  )
}
