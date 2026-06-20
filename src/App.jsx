import { useState } from 'react'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import './App.css'

function Landing({ onGetStarted }) {
  return (
    <div className="landing">
      <div className="background-image" aria-hidden="true"></div>
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow eyebrow-light">Est. 2014 &middot; Portland</p>
          <h1 className="landing-title">Welcome to Paradise Nursery</h1>
          <AboutUs />
          <button type="button" className="btn btn-primary btn-large" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [showProductList, setShowProductList] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const handleGetStartedClick = () => {
    setShowProductList(true)
  }

  const goHome = () => {
    setShowProductList(false)
    setShowCart(false)
  }

  const goPlants = () => {
    setShowProductList(true)
    setShowCart(false)
  }

  const goCart = () => {
    setShowProductList(true)
    setShowCart(true)
  }

  return (
    <div className="App">
      {!showProductList && <Landing onGetStarted={handleGetStartedClick} />}

      {showProductList && !showCart && (
        <ProductList onHome={goHome} onPlants={goPlants} onCart={goCart} />
      )}

      {showProductList && showCart && (
        <CartItem onHome={goHome} onPlants={goPlants} onCart={goCart} />
      )}
    </div>
  )
}
