import React from 'react'
import './Product.css'
import Button from '@mui/material/Button'
import { useState } from "react";
import ProductData from './ProductData';
import img1 from '../images/download.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';



function Product() {
  const naviagate=useNavigate()
  let [z,setProduct]=useState([{
    id:12,
    ttitulo:"IBSM Followup",
    fonte:"Data Source 1",
    query:"Teste"
  },{
    id:13,
    ttitulo:"IBSM Followup",
    fonte:"Data Source 2",
    query:"Teste"
  },{
    id:24,
    ttitulo:"IBSM Followup",
    fonte:"Data Source 2",
    query:"Teste"
  },{
    id:16,
    ttitulo:"IBSM Followup",
    fonte:"Data Source 1",
    query:"Teste"
  },{
    id:21,
    ttitulo:"IBSM Followup",
    fonte:"Data Source 2",
    query:"Teste"
  },{
    id:23,
    ttitulo:"IBSM Followup",
    fonte:"Data Source 2",
    query:"Teste"
  }])

  function selectValue (){
      let option=document.getElementById("productSelect")
      let valueOpt=option.options[option.selectedIndex].value
      console.log(valueOpt)
      if(valueOpt==`1`){
        naviagate("/productList1")
      }
  
  }
  return (
    <>
    <div>
      <div className="container">
        <div className="container productTitle">
          <h1 style={{
            fontSize: "32px",
            color: "#414141"
          }}>Product Page</h1>
        </div>
      </div>
      <div className="container searchProduct">
        <div className="row container">
          <div className="col"></div>
          <div className="col">
            <div className="row container">
              <div className="col">
                <input type="search" name="" id="searchInput" placeholder='Search...' />
              </div>
              <div className="col">
                <Button variant='contained' color='error' className='searchBtn'>Add Product</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container products" id='products'>
        <div className="row container title">
          <div className="col">
            <h1>Id</h1>
          </div>
          <div className="col">
            <h1>Ttitulo</h1>
          </div>
          <div className="col">
            <h1>Fonte De Dasos</h1>
          </div>
          <div className="col">
            <h1>Query</h1>
          </div>
          <div className="col"></div>


        </div>
        <hr />
        {/* <div className="row container productdata">
          <div className="col">
            12
          </div>
          <div className="col">
            IBSM Followup
          </div>
          <div className="col">
            DataSource 1
          </div>
          <div className="col">
            Teste
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
        <hr /> */}
        {z.map(value=>(
           <ProductData key={value.id} {...value}/>
        ))}

    
      </div>
      <div className="container row rowsProduct">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <h1>Rows per page:
          <select name="productSelect" id="productSelect" onChange={selectValue} style={{
            width:"50px",
            height:"30px",
            border:"2px solid grey",
            textAlign:"center"


          }}>
          
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option selected value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          
          
          </select> 1-5 of 6  <Button disabled><i className="fa-solid fa-chevron-left"></i></Button><Button variant="text" style={{
            color:"black"
          }}><i className="fa-solid fa-chevron-right"></i></Button></h1>
        </div>
        
      </div>
      <div className="container bottomImg">
          <img src={img1} alt="" className='image2'/><br />
          <h1>2015 tatvasoft.com All Rights reserved</h1>
        </div>  
        
    </div>
    
    </>
  )
  
}

export default Product