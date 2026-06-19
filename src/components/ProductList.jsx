import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import PlantIllustration from './PlantIllustration'
import { categories, plants } from '../data/plants'
import { addItem, selectCartItems } from '../redux/CartSlice'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartIds = new Set(cartItems.map((item) => item.id))
  const [justAdded, setJustAdded] = useState(null)

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
    setJustAdded(plant.id)
    window.clearTimeout(handleAdd._t)
    handleAdd._t = window.setTimeout(() => setJustAdded(null), 1400)
  }

  return (
    <div className="page product-page">
      <Header />

      <div className="product-page-intro">
        <p className="eyebrow">The Catalog</p>
        <h1>Plants ready for a new home</h1>
        <p className="lede">
          Nine specimens across three care levels &mdash; every one propagated
          in-house and shipped the week it's ordered.
        </p>
      </div>

      {categories.map((category) => (
        <section key={category.id} className="category-section" aria-labelledby={`cat-${category.id}`}>
          <div className="category-heading">
            <h2 id={`cat-${category.id}`}>{category.name}</h2>
            <p>{category.blurb}</p>
          </div>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category.id)
              .map((plant) => {
                const inCart = cartIds.has(plant.id)
                return (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-thumb">
                      <PlantIllustration variant={plant.illustration} />
                    </div>
                    <div className="plant-card-body">
                      <h3>{plant.name}</h3>
                      <p className="plant-blurb">{plant.blurb}</p>
                      <div className="plant-card-footer">
                        <span className="plant-price">${plant.price}</span>
                        <button
                          type="button"
                          className={`btn btn-primary add-btn${inCart ? ' added' : ''}`}
                          onClick={() => handleAdd(plant)}
                          disabled={inCart}
                        >
                          {inCart ? (justAdded === plant.id ? 'Added \u2713' : 'In Cart') : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
          </div>
        </section>
      ))}
    </div>
  )
}
