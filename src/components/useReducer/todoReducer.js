

// funcion que recibe dos args; el estado inicial y la accion que se va a dsiparar, esto paraetros se los mandamos 
export const todoReducer = (initialState, action) => {


    switch (action.type) {
        case 'add todo':
            return [...initialState, action.payload] // retornamos lo que ya habia en mi estdo inicial y aplicamos la accion
        
        case 'remove todo':
            return initialState.filter(todo => todo.id !== action.payload); //le decimos que si es diferente mi id al de la action.payload
    
        case 'toggle todo':
            return initialState.map( todo =>{  //recorremos nuestro estado inical y le pasamos un todo 

                if(todo.id === action.payload){ //si el id que mandamos en el todo es igual al de mi action.payload
                    return {  //regresa los todos y el done ponlo en verdadero, es decir niega que etsa en falso !todo.done
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });


        default:
            return initialState;
    }

}