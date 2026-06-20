import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import PlantIllustration from './PlantIllustration'
import { removeItem, selectCartItems, updateQuantity } from '../redux/CartSlice'

export default function CartItem({ onHome, onPlants, onCart }) {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const [checkoutMessage, setCheckoutMessage] = useState(false)

  // Explicit helper, as required by the assignment: sums quantity * price
  // across every item currently in the cart.
  const calculateTotalAmount = () =>
    items.reduce((total, item) => total + item.quantity * item.price, 0)

  // Explicit helper for a single line's subtotal.
  const calculateItemTotal = (item) => item.quantity * item.price

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = calculateTotalAmount()

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
  }

  const handleRemove = (item) => {
    dispatch(removeItem(item.id))
  }

  const handleContinueShopping = () => {
    if (onPlants) onPlants()
  }

  const handleCheckoutShopping = () => {
    setCheckoutMessage(true)
    window.alert('Checkout functionality is coming soon!')
  }

  return (
    <div className="page cart-page">
      <Header active="cart" onHome={onHome} onPlants={onPlants} onCart={onCart} />

      <div className="cart-page-intro">
        <p className="eyebrow">Your Order</p>
        <h1>Shopping Cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart doesn't have any plants in it yet.</p>
          <button type="button" className="btn btn-primary" onClick={handleContinueShopping}>
            Browse the Catalog
          </button>
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
              <span className="summary-value">${totalAmount.toFixed(2)}</span>
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
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    &minus;
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-row-total">${calculateItemTotal(item).toFixed(2)}</div>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleRemove(item)}
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
            <button type="button" className="btn btn-secondary" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button type="button" className="btn btn-primary" onClick={handleCheckoutShopping}>
              Checkout
            </button>
          </div>

          {checkoutMessage && (
            <p className="checkout-note" role="status">
              Coming Soon! Checkout isn't available yet &mdash; thanks for your patience.
            </p>
          )}
        </>
      )}
    </div>
  )
}

