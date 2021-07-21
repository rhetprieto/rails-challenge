import React, {useContext} from 'react'
import PropTypes from "prop-types"
import OrderContext from '../contexts/OrderContext';

const Product = ({product}) => {
    const [currentOrder, addToOrder, removeFromOrder] = useContext(OrderContext)
    const productInOrder = () => {
        return !!currentOrder.find((p) => {return p.id === product.id})
    }
    const handleAdd = () => {
        addToOrder(product);
    }
    const handleRemove = () => {
        removeFromOrder(product);
    }
    return (
        <div className="card">
            <img src="https://picsum.photos/100?blur" className="card-img-top" alt=""/>
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price_cents}</p>
                {productInOrder() ? <button onClick={handleRemove} className="btn btn-secondary">Remove from order</button>
                    : <button onClick={handleAdd} className="btn btn-primary">Add to order</button>}
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price_cents: PropTypes.number
    }).isRequired
}

export default Product;