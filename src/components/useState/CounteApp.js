import React, { useState } from 'react';
import './counter.css';

//funcion que estamos exportando (CunteApp)
export const CounteApp = () => {

    //hook que me ayuda a controlar el cambio de estado
    const [state,setstate] = useState({ //dejamos lo nombres predeterminados
        //aqui declaramos las variables que pudieramos llegar a utilizar
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });//state es el valor inicial, setstate me ayuda a modificar el valor incial

    //aqui extraemos de nuestro hook las variables con las que vamos a trabajar y las guardamos en una variable(state)
    const {counter1, counter2} = state;

  return (

      <>
      
      <h1>Counter1 { counter1 }</h1>
      <h1>Counter2 { counter2 }</h1>
      <hr />
      <button className='btn btn-primary'
      onClick={ () => { /* aqui le pasamos un evento click para cuando se oprima el boton(+1), modifique el valor */
          setstate({
              ...state,
              counter1: counter1 + 1
          }); 
          /* con ayuda del spret operator agregamos todos los valores iniciales q tenemos,
           en este caso solo el counter2 y despues que al counter1 le sume 1 (+1) */
      }}
      >
          +1
      </button>

      </>
  )
};
