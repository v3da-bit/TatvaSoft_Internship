import React from 'react'
import './Product.css'
import Button from '@mui/material/Button'


function ProductData({id,ttitulo,fonte,query}) {
  return (
    <>
      <div className="row container productdata">
          <div className="col">
            {id}
          </div>
          <div className="col">
            {ttitulo}
          </div>
          <div className="col">
            {fonte}
          </div>
          <div className="col">
            {query}
          </div>
          <div className="col">
          <div className="row container">
            <div className="col">
            <Button variant='outlined' color='success' style={{
              width:"80px",
              height:"30px"
            }}>Edit</Button>
            </div>
            <div className="col">
            <Button variant='outlined' color='error' style={{
              width:"80px",
              height:"30px"
            }}>Delete</Button>
            </div>
          </div>
            
            
          </div>
        </div>
        <hr />
    </>
  )
}

export default ProductData