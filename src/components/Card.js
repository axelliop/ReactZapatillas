import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name,img,id,price}) => {
    return (
      
        <div className='inline-flex m-10'>
        <div className="flex card w-96 glass">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>${price}</p>
    <div className="card-actions justify-end">
    <Link to={`/detail/${id}`}> <button className="btn btn-primary">DETALLES</button></Link>
    </div>
  </div>
</div>
</div>
  
    )
  }

export default Card