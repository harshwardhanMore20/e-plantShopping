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
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) item.quantity += 1
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
      }
    },
  },
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

export default cartSlice.reducer
