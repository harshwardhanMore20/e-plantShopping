import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import PlantIllustration from './PlantIllustration'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
  selectTotalCost,
  selectTotalQuantity,
} from '../redux/CartSlice'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectTotalQuantity)
  const totalCost = useSelector(selectTotalCost)
  const [checkoutMessage, setCheckoutMessage] = useState(false)

  return (
    <div className="page cart-page">
      <Header />

      <div className="cart-page-intro">
        <p className="eyebrow">Your Order</p>
        <h1>Shopping Cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart doesn't have any plants in it yet.</p>
          <Link to="/plants" className="btn btn-primary">
            Browse the Catalog
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary-bar">
            <div>
              <span className="summary-label">Total plants</span>
              <span className="summary-value">{totalQuantity}</span>
            </div>
            <div>
              <span className="summary-label">Total cost</span>
              <span className="summary-value">${totalCost.toFixed(2)}</span>
            </div>
          </div>

          <ul className="cart-list">
            {items.map((item) => (
              <li className="cart-row" key={item.id}>
                <div className="cart-row-thumb">
                  <PlantIllustration variant={item.illustration} />
                </div>

                <div className="cart-row-info">
                  <h3>{item.name}</h3>
                  <span className="unit-price">${item.price.toFixed(2)} each</span>
                </div>

                <div className="cart-row-quantity">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    &minus;
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-row-total">${(item.price * item.quantity).toFixed(2)}</div>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-actions">
            <Link to="/plants" className="btn btn-secondary">
              Continue Shopping
            </Link>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setCheckoutMessage(true)}
            >
              Checkout
            </button>
          </div>

          {checkoutMessage && (
            <p className="checkout-note" role="status">
              Checkout is coming soon &mdash; we're potting it up. Thanks for your patience!
            </p>
          )}
        </>
      )}
    </div>
  )
}
