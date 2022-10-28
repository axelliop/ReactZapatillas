import React, { useEffect, useState } from 'react'
import { useCart} from './context/CartContext'


const Cart = () => {


  const [total, setTotal] =  useState(0)


/*  const getTotal = () => {
  const subtotales = products.map(ic => ic.cantidad * ic.price)
  const total = subtotales.reduce((total,cant) => total + cant, 0)
  return total
}*/


  useEffect(() => {
    const getTotal = () => {
        const res = products.reduce((prev,item) => {   /* reduce lo que hace es tener un acumulador dentro de index, una sumatoria */
        return prev + (item.price * item.cantidad)
    }, 0)
    setTotal(res)
}
getTotal()
}, [total]) 


  
    const {products, clearCart } = useCart() /* hacer un products.length */

  return (
    <div>
        <div >Carrito</div>
        {products.map((p, i) => <li key={i}>{p.name}</li>)}
        <span className="text-info">Total: ${total}</span>
        <button className='btn' onClick={clearCart}>Limpiar Carrito</button>
        </div>
  )
}

export default Cart