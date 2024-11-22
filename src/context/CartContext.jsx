import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    getTotalQuantity: () => 0, 
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        setCart((prev) => {
            const existingItemIndex = prev.findIndex(cartItem => cartItem.id === item.id)
    
            if (existingItemIndex === -1) {
                return [...prev, { ...item, quantity }]
            } else {
                const updatedCart = [...prev]
                updatedCart[existingItemIndex].quantity += quantity
                return updatedCart
            }
        })
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, item)=> total + ( item.quantity * item.price ), 0 )
        return price
    }

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, getTotalQuantity, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    )
}