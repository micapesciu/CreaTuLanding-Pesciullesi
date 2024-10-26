import "./ItemListContainer.css";
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts()  
            .then(response => {
                const filteredProducts = categoryId 
                    ? response.filter(product => product.category === categoryId)
                    : response;

                setProducts(filteredProducts); 
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList products={products} category={categoryId} />
        </div>
    );
};

export default ItemListContainer;