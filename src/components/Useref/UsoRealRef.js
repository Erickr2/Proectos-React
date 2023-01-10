import React, { useState } from 'react';
import { MultipleCustomHook } from '../ejemplos/MultipleCustomHook';
import '../UseEffect/styles.css';



export const UsoRealRef = () => {


    const [Show, setShow] = useState(false); //useState 

  return (
      <>

      <div>UsoRealRef</div>

      { Show && < MultipleCustomHook />} {/* si show es verdedero se muestra mi componente */}

      <button className='btn btn-primary mt-5'
      onClick={ () => { /* cuando se haga click modifica mi estado y oculta el show(componente) */
          setShow(!Show);
      }}>
          mostrar 
      </button>

      </>
  )
}
