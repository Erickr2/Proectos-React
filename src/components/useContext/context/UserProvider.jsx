import { UserContext } from "./UserContext"

const user = {
  name: 'uriel',
  edad: 21,
  num: 553450444
}

/* un provider me ayuda a que todos los hijos que hay dentro de mi provider puedan acceder a la info de todos los componentes*/

export const UserProvider = ({ children }) => { /* childen hace referencia a todas mis rutas  */
  return (
    <UserContext.Provider value={{name:'uribb', user}}> 
        { children } {/* aqui se renderian mis rutas  */}
    </UserContext.Provider>
  )
}
