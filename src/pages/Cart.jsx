import React, { useState } from 'react'
import { clp } from '../utils/format.js'
import { pizzaCart } from '../../pizzas.js'

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart)

  const handleAdd = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ))
  }

  const handleRemove = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter(item => item.count > 0)
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
  <div className="d-flex justify-content-center align-items-center p-4">
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
              <img src={item.img} alt={item.name} width={80} className="me-3" />
              <div className="flex-grow-1">
                <h5 className="mb-1">{item.name}</h5>
                <span className="text-muted">${clp(item.price)}</span>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => handleRemove(item.id)}>-</button>
                <span>{item.count}</span>
                <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => handleAdd(item.id)}>+</button>
              </div>
            </div>
          ))}
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h4>Total: ${clp(total)}</h4>
            <button className="btn btn-success">Pagar</button>
          </div>
        </div>
      )}
    </div>
  </div>
)
}