import { useState } from "react"

export const UseCounter = (initialState = 10) => {  /* me lo estoy exportando a MultiplecustomHook */

    const [Counter, setCounter] = useState(initialState);

    const increment = () =>{
        setCounter( Counter + 1)
    }

    
    const decrement = () =>{
        setCounter( Counter -1 )
    }

    const reset = () =>{
        setCounter(initialState)
    }

    return {
        Counter,
        increment,
        decrement,
        reset
    };
}