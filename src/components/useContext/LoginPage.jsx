import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const {user} = useContext(UserContext) // useContext me ayuda a hacer referencia de mi contexto y obtener datas de cualquier componente que este dentro de mi contexto 
  console.log(user)
  console.log('first')

    return (
      <>
      <h1>LoginPage</h1>
      <hr />
      </>
    )
  }
  