import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import db from '../../db/db'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { idCategory } = useParams()

    const getProductById = () => {
        const docRef = doc( db, "products", idCategory )
        getDoc(docRef)
            .then((dataDb) => {
                const data = { id: dataDb.id, ...dataDb.data() }
                setProduct(data)
            })
    }

    useEffect(() => {
        getProductById()
    },  [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer