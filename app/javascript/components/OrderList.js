import React from 'react'
import useRequest from '../hooks/useRequest';

const OrderList = () => {
    const [orders, loading, error] = useRequest({url: '/orders/get_all'})
    if (loading) return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    
    if(!orders) return (<div>No Pizza for you :(</div>)

    return (
        <div>
            {orders.map((order) => (
                <div className="card" key={order.id}>
                    <p>Order Total: ${order.price}</p>
                    <ul className="list-group">
                        {order.products.map((p) => (
                            <li className="list-group-item" key={`${order.id}-${p.name}`}>{p.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default OrderList