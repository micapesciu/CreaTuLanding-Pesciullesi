import React, { useContext } from "react"
import carrito from "../../assets/carrito.png"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return (
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={carrito} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;