import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalQuantity, totalPrice } = useContext(CartContext);

    if (getTotalQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div>
            <h1 className="title-cart">Productos en el carrito</h1>
            {
                cart.map((item) => {
                    console.log(item);  
                    return (
                        <div className='CardCart' key={item.id}>
                            <img src={item.img} width={100} alt={item.name} />
                            <p className="Info">{item.name}</p>
                            <p className="Info">Precio por Unidad: ${item.price}</p>
                            <p className="Info">Cantidad de Unidades: {item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}
                            >Borrar Item</button>
                        </div>
                    )
                })
            }
    
            <div className='CardCartResumen'>
                <p className="Info Precio">Precio total: ${totalPrice()}</p>
                <button className='OptionVaciar' onClick={clearCart}>Vaciar carrito</button>
                <Link className='Option' to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart;