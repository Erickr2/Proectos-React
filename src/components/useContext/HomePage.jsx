import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const  HomePage= () => {

  const {user } = useContext(UserContext) //extraigo mi data de User ¿Context
    return (
      <>
      <h1>HomePage <small>{user}</small></h1> {/* renderizo mi usuario */}
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)} {/* parseo el arreglo a un string  */}
      </pre>
      </>
    )
  }
  