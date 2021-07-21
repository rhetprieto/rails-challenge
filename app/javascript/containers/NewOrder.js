import React, {useContext} from 'react';
import useRequest from '../hooks/useRequest'

const NewOrder = () => {
    const [data, loading, error] = useRequest({url: '/products/list'})
    if (loading) return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    
    if(!data) return (<div>No Pizza for you :(</div>)
    
    return (
        <div>
            {data.map((product) => {
                return (<div>{product.name}: {product.price_cents}</div>)
            })}
        </div>
    )
}

export default NewOrder;