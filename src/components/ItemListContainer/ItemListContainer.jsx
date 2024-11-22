import "./ItemListContainer.css"
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../../db/db.js"

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    const getProducts = () => {
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then((dataDb) => {
                const data = dataDb.docs.map((productDb) => {
                    return {id: productDb.id, ...productDb.data()}
                })

                setProducts(data)
            })
    }

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products")
        const queryFilter = query(productsRef, where("category", "==", categoryId))

        getDocs(queryFilter)
            .then((dataDb) => {
                const data = dataDb.docs.map((productDb) => {
                    return {id:productDb.id, ...productDb.data()}
                })

                setProducts(data)
            })
    }

    useEffect(() => {
        if(categoryId){
            getProductsByCategory()
        }else{
            getProducts()
        }
    }, [categoryId])

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList products={products} category={categoryId} />
        </div>
    );
};

export default ItemListContainer;