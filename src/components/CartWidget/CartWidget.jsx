import React, { useContext } from "react"
import carrito from "../../assets/carrito.png"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    return (
        <div className="cart">
            <img src={carrito} alt="Carrito" className="carrito" />
            <p className="numero">{totalQuantity}</p>
        </div>
    )
}

export default CartWidget;