// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length

      const price = cartList.map(each => each.quantity * each.price)
      const x = price.reduce((acc, val) => acc + val)

      return (
        <div className="cart-summary">
          <h1 className="label">
            Order Total: <span className="value">Rs {x} /- </span>
          </h1>
          <p>{cartItemsCount} Items In Cart</p>
          <button type="button" className="checkout-button">
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
