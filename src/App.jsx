import { Routes, Route, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import './App.css'

function Landing() {
  return (
    <div className="landing">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow eyebrow-light">Est. 2014 &middot; Portland</p>
          <h1 className="landing-title">Paradise Nursery</h1>
          <AboutUs />
          <Link to="/plants" className="btn btn-primary btn-large">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}
