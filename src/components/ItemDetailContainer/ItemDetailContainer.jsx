import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { idCategory } = useParams()

    useEffect(() => {
        getProductById(idCategory)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },  [idCategory])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer