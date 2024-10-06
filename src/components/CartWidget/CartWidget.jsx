import carrito from "../../assets/carrito.png"
import "./CartWidget.css"

const CartWidget = () => {

    return (
        <div className="cart">
            <img src={carrito} alt="Carrito" className="carrito"/>
            <p className="numero">1</p>
        </div>
    )

}

export default CartWidget