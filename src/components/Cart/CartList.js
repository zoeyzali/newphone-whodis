import React from 'react'
import CartItem from './CartItem';

function CartList({ value }) {
  const { cart } = value;
  // console.log(value, cart, 'Your cart & value is')
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />
      })}
    </div>
  )
}

export default CartList
