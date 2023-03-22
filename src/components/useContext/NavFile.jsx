import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavFile = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* NavLink nos permite saber si me nav-link esta en el path que tiene de esa manera pdemos aplicar estilos si esta en su path */}
                        <NavLink
                        className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} /* si la propiedad isActive esta en true agrega la clase active que resalta mi texto, caso contrario no mandes nada */
                        to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                        className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} 
                        to="/About"
                        >
                            About
                        </NavLink>

                        <NavLink
                        className={ ({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} 
                        to="/Login"
                        >
                            Login
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
