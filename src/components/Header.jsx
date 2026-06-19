import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../redux/CartSlice'

export default function Header() {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path
              d="M16 28 C 16 18 16 12 16 6 C 22 10 24 18 16 28 Z"
              fill="var(--moss)"
            />
            <path
              d="M16 28 C 16 18 16 12 16 6 C 10 10 8 18 16 28 Z"
              fill="var(--leaf)"
            />
          </svg>
        </span>
        Paradise Nursery
      </NavLink>

      <nav className="site-nav" aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/plants" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active cart-link' : 'nav-link cart-link')}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M3 4h2l1.4 11.2A2 2 0 0 0 8.4 17h8.2a2 2 0 0 0 2-1.66L20 7H6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="21" r="1.4" fill="currentColor" />
            <circle cx="17" cy="21" r="1.4" fill="currentColor" />
          </svg>
          Cart
          <span className="cart-count" aria-label={`${totalQuantity} items in cart`}>
            {totalQuantity}
          </span>
        </NavLink>
      </nav>
    </header>
  )
}
