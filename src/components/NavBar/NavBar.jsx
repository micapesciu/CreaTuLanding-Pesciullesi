import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    return (
    <nav className="navbar">   
        <Link to='/' className="logo">
            <img src={logo} alt="Logo"/>
        </Link>     
        <div className="Categories">
            <NavLink to={`/category/cuadros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CUADROS</NavLink>
            <NavLink to={`/category/floreros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>FLOREROS</NavLink>
            <NavLink to={`/category/velas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>VELAS</NavLink>
        </div>
        <CartWidget/>
    </nav>
    )

}

export default NavBar