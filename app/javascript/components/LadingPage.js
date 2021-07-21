import React, {useContext} from 'react'
import PropTypes from "prop-types"
import OrderContext from '../contexts/OrderContext';

const ContinueOrder = () => {
    const [currentOrder] = useContext(OrderContext)
    return (
    <div className="jumbotron jumbotron-fluid">
        <h3 className="didplay-4">
            Continue your order of
        </h3>
        <ul className="lead">
            {currentOrder.map((product) => <li>{product.name}: {product.price_cents}</li>)}
        </ul>
    </div>
    )
}

const LandingPage = ({orderActive}) => (
    <>
        { orderActive && <ContinueOrder />}
        <div className="jumbotron">
            <img style={{width: '100%'}} src="https://image.shutterstock.com/z/stock-photo-three-different-pizzas-in-panoramic-composition-1390515929.jpg" />
        </div>
    </>
)

LandingPage.propTypes = {
    orderActive: PropTypes.bool
}

LandingPage.defaultProps = {
    orderActive: false
}

export default LandingPage;