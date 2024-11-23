import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalQuantity, totalPrice } = useContext(CartContext);

    if (getTotalQuantity() === 0) {
        return (
            <div className="NoItemsContainer">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className="title-cart">Productos en el carrito</h1>
            {
                cart.map((item) => (
                    <div className='CardCart' key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div className="InfoContainer">
                            <p>{item.name}</p>
                            <p>Precio por Unidad: ${item.price}</p>
                            <p>Cantidad de Unidades: {item.quantity}</p>
                        </div>
                        <div className="ActionsContainer">
                            <button onClick={() => removeItem(item.id)}>Borrar Item</button>
                        </div>
                    </div>
                ))
            }
    
            <div className='CardCartResumen'>
                <p className="Info Precio">Precio total: ${totalPrice()}</p>
                <div className="ButtonsContainer">
                    <button className='OptionVaciar' onClick={clearCart}>Vaciar carrito</button>
                    <Link className='Option' to="/checkout">Terminar mi compra</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart