import { useState } from "react"

/* 
creamos el custom hook Useform que recibe un parametro que es el estado inicial(objeto vacio)

usamos un useState para controlar mi estado con mis variables FormState y setFormState que me trae mi initialForm 

creamos una funcion para controlar el cambio de los inputs, recibimos el componenete que desato mi evento 

modificamos los valores SetFormState() agregamos lo que ya estaba y le pasamos los nuevos valores 
*/


export const Useform = ( initialForm = {} ) => {
  
    const [FormState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
      const {name, value} = target; /* desestructuramos los valores a usar de mi evento actual */
      /* modificador de estado, inyectamos los valores de mi FormState */
        setFormState({
          ...FormState,
          [ name ]: value  /*obtenesmos del evento que esta ocurrindo el name/ value hace referencia al valor que me mandan  */
        });     
      }

      const onResetForm = () => {
        setFormState(initialForm);
      }

      /* retornamos nuestro values de nuestro estado y nuestra funcion */

      return {
        ...FormState,
        FormState,
        onInputChange,
        onResetForm
      }
}
