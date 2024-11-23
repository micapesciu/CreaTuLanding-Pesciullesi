import React from 'react'
import { useState,useContext  } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'
import './Checkout.css'

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)

    const {cart, totalPrice, clearCart} = useContext(CartContext)

    const handleChangeInput = (event) => { setDataForm({...dataForm, [event.target.name]: event.target.value})}

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            totalPrice: totalPrice()
        }

        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
            .then((response) => {
                setIdOrder(response.id)
            })
            .finally(() => {
                clearCart()
            })
    }

    return (
        <div class="CheckoutContainer">
            {
                idOrder === null ? (
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder='Nombre' required />
                        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder='Celular' required />
                        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder='Email' required />
                        <button type='submit'>Terminar mi compra</button>
                        <Link to="/cart" className="OptionVaciar">Cancelar</Link>
                    </form>
                ) : (
                <div>
                    <h1 >Orden generada correctamente</h1>
                    <h2>¡Gracias por elegir Dalia! ​💖​</h2>
                    <p>Enviamos a tu mail toda la info de la compra</p>
                    <Link to="/" class="Option">Volver a la Tienda</Link>
                </div>
                )
            }
        </div>
    )
}

export default Checkout