import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Card from './Card'
import Carousel from './Carousel'


/* ------------ SACARLO DE ACA ------------------------ */

/* ----------  SACARLO DE ACA -------------- */






const ListContainer = () => {

/* ----------------- CONECTARME A FIREBASE ------------------ */


const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => { 
    


getProducts()

}, [])

const getProducts = () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    getDocs( productsCollection ).then(res =>  {
        const productsData = res.docs.map( d => ({id: d.id, ...d.data()}) )/* mapeando haciendolo  object */
        console.log(productsData);
        setProducts( productsData )
        setLoading(false)
    })
}



/* ----------------- CONECTARME A FIREBASE ------------------ */


  return (
    <div>
      <div><Carousel/> </div>
        { loading ? <h1> Cargando... </h1>
        : 
        products.map( p => <Card key={p.id} {...p}/>)}

        
    </div>
  )
}

export default ListContainer