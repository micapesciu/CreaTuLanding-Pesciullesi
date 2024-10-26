import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">   
            <div className="logo">
                <img src={logo} alt="Logo"/>  
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