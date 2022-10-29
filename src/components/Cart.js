import React, { useEffect, useState } from 'react'
import { useCart} from './context/CartContext'


const Cart = () => {


  const [total, setTotal] =  useState(0)


/*  const getTotal = () => {
  const subtotales = products.map(ic => ic.cantidad * ic.price)
  const total = subtotales.reduce((total,cant) => total + cant, 0)
  return total
}*/


const getTotalPrice = () => { return products.reduce((prev, act) => prev + act.cantidad * act.price, 0); }

  
    const {products, clearCart } = useCart() /* hacer un products.length */

  return (
    <div>
        <div >Carrito</div>
        {products.map((p, i) => <li key={i}>{p.name}</li>)}
        <span className="text-info">Total: ${getTotalPrice()}</span>
        <button className='btn' onClick={clearCart}>Limpiar Carrito</button>
        </div>
  )
}

export default Cart