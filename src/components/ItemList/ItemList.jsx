import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products, category }) => {
    const filteredProducts = category 
        ? products.filter(prod => prod.category === category)
        : products; // Si no hay categoría, devuelve todos los productos

    return (
        <div className='ListGroup'>
            {filteredProducts.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList;