import React, {useState} from "react"
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import OrderContext from '../contexts/OrderContext';
import LandingPage from './LadingPage';
import NewOrder from '../containers/NewOrder'
import OrderList from './OrderList'

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
  return (
    <OrderContext.Provider value={[currentOrder, addToOrder, removeFromOrder]}>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
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
