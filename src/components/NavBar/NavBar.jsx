import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">   
            <div className="logo">
                <NavLink to='/'>
                    <img src={logo} alt="Logo"/>  
                </NavLink>
            </div>
            <div className="Categories">
                <NavLink to='/' className='Option'>INICIO</NavLink>
                <NavLink to={`/category/cuadros`} className='Option'>CUADROS</NavLink>
                <NavLink to={`/category/floreros`} className='Option'>FLOREROS</NavLink>
                <NavLink to={`/category/velas`} className='Option'>VELAS</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar