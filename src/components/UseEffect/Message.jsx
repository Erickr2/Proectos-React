import React, { useEffect, useState } from 'react'

export const Message = () => {

    //hacemos uso del useState para controlar el movimiento del mouse
    const [coords, setcoords] = useState({ x:0, y:0 })
    const { x, y } = coords;// donde cords va a ser igual a la cordenadas en x & y del mouse

    useEffect(() => {
    
        //declaramos una funcion y le paamos el evento(moevermouse)
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y}; //extraemos los valores donde se mueve el mouse { x: e.x, y: e.y}
            setcoords(coords); //y se las mandamos a nuestro modificador de estado(setcoords)

            console.log(':D') //cada que se mueva el mouse(cambie el estado) se imprime en consola la carita
        }

        //agregamos un escuchador del evento para cuando se mueva el mouse y le pasamos el evento a mi funcion mouseMove
        window.addEventListener('mousemove', mouseMove);
    
        //una vez que cambie el estado que activa mi useEffect, limpiamos la funcion con un(removeEventListener)
      return () => {
        window.removeEventListener('mousemove', mouseMove);//quiere decir que ya no hay ningun escuchador
      }
    }, [])
    

    //cuando mi estado active el useEffect imprime esto en pantalla
  return (
    
    <div>
      <h3>want wake up?</h3>
      <p>x:{x} y:{y}</p>
    </div>
    
    
  )
}
