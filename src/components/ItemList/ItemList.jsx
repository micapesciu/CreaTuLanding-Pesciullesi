import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products, category }) => {
    const filteredProducts = category 
        ? products.filter(prod => prod.category === category)
        : products; 

    return (
        <div className='ListGroup'>
            {filteredProducts.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList;