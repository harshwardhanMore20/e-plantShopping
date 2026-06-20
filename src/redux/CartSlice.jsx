import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // { id, name, price, illustration, quantity }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload
      const existing = state.items.find((item) => item.id === plant.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          illustration: plant.illustration,
          quantity: 1,
        })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // Single source of truth for quantity changes. Both the increment and
    // decrement buttons on the cart page dispatch this with the new
    // quantity already computed. A quantity of 0 or less removes the item.
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (!item) return
      if (quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id)
      } else {
        item.quantity = quantity
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

export default cartSlice.reducer
