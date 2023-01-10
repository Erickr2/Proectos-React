import React from 'react'

/* declaro funcion que contiene un boton y llama a mi fucnion "Increment" aumenta mi contador */

export const Showincrement = React.memo(({increment}) => {  

    console.log('me volvi a mostrar :(')

  return (
    <>
    <button
    className='btn btn-primary'
    onClick={ () =>{
        increment( 5 ); /* puedo mandar argumentos a mi funcion y recibirlos en mi otro componente */
    }}
    >
        aumentar
    </button>
    </>
  )
}
)