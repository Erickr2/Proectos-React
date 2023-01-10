import React, { useCallback, useState } from 'react';
import { Showincrement } from './Showincrement';
import '../UseEffect/styles.css'

/* funcion que llama a mi funcion xD Callback */

export const Callback = () => {

    /* estate */
    const [Counter, setCounter] = useState( 10 );
 
    /* regresa una funcion que tiene logica que quiero que ejecute, regresa una funcion memorizada y que puedo 
    mandar como argumento en otra funcion */
    const increment = useCallback( (num) => { /* le decimo que va a recibir un argumento "num" */
        setCounter( c => c + num); /* aumentamos en num */
    }, [ setCounter ])

  return (
      <>
      <h1>Use callback: {Counter}</h1>
      <hr />

      <Showincrement increment={increment}/> {/* llamamos mi componente y le paso mi funcion Increment */}
      </>
  )
}
