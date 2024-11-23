import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem } = useContext(CartContext); 
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        
        const item = {
            id,
            name,
            price,
            img
        }

        addItem(item, quantity)
    }

    return (
        <div className='ContenedorItem'>
            <article className='CardItemDetail'>
                <div className='PictureColumn'>
                    <img src={img} alt={name} className='ItemImg' />
                </div>
                <div className='InfoColumn'>
                    <header>
                        <h2 className='ItemHeader'>{name}</h2>
                    </header>
                    <section>
                        <p className='Info'>{description}</p>
                        <p className='Info'>Stock: {stock}</p>
                        <p className='Info Precio'>${price}</p>
                    </section>
                    <footer className='ItemFooter'>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className='Option'>Terminar Compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                    </footer>
                </div>
            </article>
        </div>
    );
}

export default ItemDetail;