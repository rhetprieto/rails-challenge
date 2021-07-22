import React, {useState} from "react"
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import OrderContext from '../contexts/OrderContext';
import LandingPage from './LadingPage';
import NewOrder from '../containers/NewOrder';
import OrderList from './OrderList';
import OrderButton from './OrderButton';

const Home = (props) => {
  const [currentOrder, setCurrentOrder] = useState([])
  const addToOrder = (product) => {
    // Assume you can only add one pizza of each type to the current order
    setCurrentOrder(currentOrder.concat(product))
  }
  const removeFromOrder = (product) => {
    const prodFround = currentOrder.find((p) => {return p.id === product.id})
    if(prodFround) {
      setCurrentOrder(currentOrder.splice(currentOrder.indexOf(product),1))
    }
  }

  const totalPrice = () => {
    return currentOrder.reduce((acc, p) => {return acc + p.price_cents},0);
  }
  return (
    <OrderContext.Provider value={[currentOrder, addToOrder, removeFromOrder]}>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-toggler">
            ${totalPrice()}
          </p>
          <OrderButton />
        </div>
      </nav>

      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <Router>
                <Link to='/'><h1 className="fw-light">CheeZies Pizza Store</h1></Link>
                <p>
                  <Link to='/orders/new' className="btn btn-primary my-2">Create Order</Link>
                  <Link to='/orders/list' className="btn btn-secondary my-2">List Orders</Link>
                </p>
                <Switch>
                  <Route path="/orders/new">
                    <NewOrder />
                  </Route>
                  <Route path="/orders/list">
                    <OrderList />
                  </Route>
                  <Route path='/' exact>
                    <LandingPage orderActive={currentOrder.length > 0}/>
                  </Route>
                </Switch>
              </Router>
            </div>
          </div>
        </section>
      </main>
    </OrderContext.Provider>
  )
}

export default Home
