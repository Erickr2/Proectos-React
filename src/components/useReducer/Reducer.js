
/* estado inicial que tiene un arreglo de objetos */
const initialState = [{

    id: 1,
    todo: 'comprar pan',
    done: false
}];

/* funcion que recibe 2 arguentos, state que si no se le manda nada su estado inical sera mi arreglo de objetos y la action
que esta modificara el estado de mi funcion 
*/

const miFuncion = (state = initialState, action) =>{

    /* le mandamos mi nuevo objeto en el argumento action y le decimos con el signo ? que
    si mi action trae en su argumento type: el string agregar; me regrese mi estado anterior "...state"
    y que me regrese mi obejto newAction con su argumento.payload que trae el objeto que creé anntes */
    if(action?.type ==='agregar'){
        return [...state, newAction.payload]
    }
    /* aqui retornamos nuestro estado inicial */
    return state
}


/* guardaos mifuncion en la variable "todos" */
let todos = miFuncion();

/* creamos un nuevo objeto */
const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false
}

/* creamos nuestra accion que tiene dos argumentos el tipo: que definira lo que hara 
y el payload: que tendra el objeto nuevo que cree */
const newAction ={
    type: 'agregar',
    payload: newTodo
}

/* a traves d emi variable todos le mando dos arguentos a mi funcion que son los todos, que contiene mi arreglo de objetos
y la newation que contiene el nuevo objeto que cree */
todos = miFuncion(todos, newAction);

/* imprimo en consola mi variable que contiene mi funcion */
console.log(todos)