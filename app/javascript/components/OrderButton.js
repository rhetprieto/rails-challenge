import React, {useContext} from 'react';
import useRequest from '../hooks/useRequest';
import OrderContext from '../contexts/OrderContext';

const OrderButton = () => {
    const [currentOrder] = useContext(OrderContext);
    const [data, loading, error, execute, called] = useRequest({url: '/orders',lazy:true, method:'POST'})

    const handleMakeOrder = () => {
        execute({params: {products: currentOrder}});
    }

    if(!called) {
        return (
            <button disabled={currentOrder.length === 0} className="btn btn-primary" onClick={handleMakeOrder}>Make Order</button>
        )
    }

    if(called && loading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    if(data) {
        return (<div className="btn btn-success">Order created!</div>)
    }

    return null
}

export default OrderButton;