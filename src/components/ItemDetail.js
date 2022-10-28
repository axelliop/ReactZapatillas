import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from './context/CartContext'


/* PARA IMPRIMIR TODO EN ITEMDETAIL */


const ItemDetail = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({})
    const {addToCart} = useCart()

    
    useEffect(() => { 
        

    getProduct()
    
    }, [])
    
    const getProduct = () => {
        const db = getFirestore()
        const productsCollection = collection(db, 'products')
        const docRef = doc(productsCollection, id)
        getDoc( docRef ).then(res => {
            console.log(res.data() )
            setProduct(res.data())
        })
    }

    const addHandler = () => {
        addToCart(product)
    }

  return (
    <div className="section-fluid-main">

    


    
		<div className="section">
	      	<div className='inline-flex '>
            <div className='flex mb-500'>
          <img src={product.imgpng} height={500} width={600} />
          </div>
          <div>
	      		<p className="title-up">Zapas a la moda!</p>
	      		<h2>{product.name}</h2>
	      		<h4>$174 <span>$237</span></h4>	
	      		<div className="section-fluid">
	      			<div className="desc-1">{product.description}</div>
	      			<input className="desc-btn" type="radio" id="desc-2" name="desc-btn"/>
		      		<div className="section-fluid desc-sec accor-1">
		      			<p>{product.description}</p>
                
		      		</div>	
              <button className='btn btn-primary' onClick={addHandler}>Agregar al Carrito</button>
              </div>




		</div>
	</div>
</div>
</div>

  )
}

export default ItemDetail