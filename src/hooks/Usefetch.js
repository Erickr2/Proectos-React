import { useEffect, useRef, useState } from "react"


export const Usefetch = ( url ) => {
  
    const Mounted = useRef(true) //usamos una referencia que va estar apuntando a verdadero, porq esta montado el componenete(renderizado)
    const [State, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
    
      return () => {
        Mounted.current = false;
      }
    }, [])
    

    useEffect(() => {
      
        setState({data: null, loading: true, error: null});

        fetch( url )
        .then( resp => resp.json() )
        .then(data =>{

            setTimeout(() => {

                if(Mounted.current){ /* de esta manera condicionamos al componenete para que cuando se desmonete no halla conflictos  */

                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else{
                    console.log('no se mostro');
                }
                
            }, 4000);
        });

    }, [ url ])
    
    return State;
}
