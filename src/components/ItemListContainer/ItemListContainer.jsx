import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({saludo,mensaje}) => {
    return (
        <div>
            <h1>{saludo}</h1>
            <h2>{mensaje}</h2>
        </div>
    )
}

export default ItemListContainer

