import React, { useRef } from 'react';
import '../UseEffect/styles.css';

export const FocusScreen = () => {


    const inputRef = useRef(); //referencia 

    const handleClick = () => {

        inputRef.current.select(); //llamamos a la referencia que me va a seleccionar lo q halla en mi input
    }

  return (
      <>

      <div>FocusScreen</div>
      <hr />   
      
      <input 

      ref = {inputRef}
      className='form-control'
      placeholder='su nombre'

      />

      <button className=' btn btn-outline-primary mt-5'
      onClick={ handleClick }>
          Focus
      </button>
      
      </>
    

  )
}
