import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => {

    return (
    <header className="navbar">   

        <div className="logo">
            <img src={logo} alt="Logo"/>
        </div>     
        
        <ul>
            <li>PINTURAS</li>
            <li>ESCULTURAS</li>
            <li>HOGAR</li>
        </ul>

        <CartWidget/>
    </header>
    )

}

export default NavBar