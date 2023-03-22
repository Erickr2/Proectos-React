import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPages"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavFile } from "./NavFile"
import './styles.css'


export const MainApp = () => {
  return (
    <UserProvider>
    <NavFile />
    <hr />

{/* routes es un high order component que a su ves contienes routes que son los componenes de mi contexto */}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="Login" element={<LoginPage />} />
      <Route path="About" element={<AboutPage />}/>
      <Route path="/*" element={<Navigate to="/About"/>} /> {/* esta ruta me yuda a controlar rutas inexistentes, puedo agregar una pagina 404  */}
    </Routes>
    </UserProvider>
  )
}
