import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <><>
        </><nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <NavLink
                    className="nav-link"
                    to="/">INSTA YA</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/reg">Registrar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/gestion">Gestion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                                className="nav-link"
                                to="/recogida">Recogida</NavLink>
                        </li>
                    </ul>
                </div>
            </nav></>

    )
}

export default Navbar