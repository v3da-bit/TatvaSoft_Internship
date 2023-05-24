import React from 'react'
import './Cart.css'
import Button from '@mui/material/Button';
import img1 from '../images/download.png';


function Cart() {
  function increment(){
    let value=document.getElementById('itemsCount').innerHTML
    value=parseInt(value)+1
    console.log(value)
    document.getElementById('itemsCount').innerHTML=value

  }
  function decrement(){
    let value=document.getElementById('itemsCount').innerHTML
    if (parseInt(value)>0) {
      value=parseInt(value)-1
      console.log(value)
      document.getElementById('itemsCount').innerHTML=value
   
    }
    
  }
  return (
    <div>
      <div className="container">
        <div className="container cartTitle">
          <h1 style={{
            fontSize: "32px",
            color: "#414141"
          }}>Cart Page</h1>
        </div>
        <div className="row container inDivs">
          <div className="col"></div>
          <div className="col-6">
            <h1 style={{
              font: '18px roboto #414141'
            }}>My Shopping Bag (3 Items)</h1>
            <div className="row d1">
              <div className="row container">
                <div className="col">
                  <div className="imgIn" style={{
                    backgroundColor: "black"
                  }}></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-8">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1><b>Campus Sutra</b></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1 style={{ color: "red" }}>Car Item name</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <button onClick={increment} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>+</h1></button>
                        <div id='itemsCount' style={{height:"40px",width:"40px",textAlign:"center",fontSize:"24px"}}>
                        0
                        </div>
                        <button onClick={decrement} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>-</h1></button>
                        
                      </div>
                    </div>
                    <div className="col">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>500</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>1000 <span style={{color:"red"}}><b>50% off</b></span></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                       <Button variant="text" color='error'>Remove</Button>
                      </div>

                    </div>
                  </div>

                </div>


              </div>
            </div>
            <div className="row d1">
              <div className="row container">
                <div className="col">
                  <div className="imgIn" style={{
                    backgroundColor: "black"
                  }}></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-8">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1><b>Campus Sutra</b></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1 style={{ color: "red" }}>Car Item name</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <button onClick={increment} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>+</h1></button>
                        <div id='itemsCount' style={{height:"40px",width:"40px",textAlign:"center",fontSize:"24px"}}>
                        0
                        </div>
                        <button onClick={decrement} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>-</h1></button>
                        
                      </div>
                    </div>
                    <div className="col">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>500</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>1000 <span style={{color:"red"}}><b>50% off</b></span></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                       <Button variant="text" color='error'>Remove</Button>
                      </div>

                    </div>
                  </div>

                </div>


              </div>
            </div>
            <div className="row d1">
              <div className="row container">
                <div className="col">
                  <div className="imgIn" style={{
                    backgroundColor: "black"
                  }}></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-8">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1><b>Campus Sutra</b></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1 style={{ color: "red" }}>Car Item name</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <button onClick={increment} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>+</h1></button>
                        <div id='itemsCount' style={{height:"40px",width:"40px",textAlign:"center",fontSize:"24px"}}>
                        0
                        </div>
                        <button onClick={decrement} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>-</h1></button>
                        
                      </div>
                    </div>
                    <div className="col">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>500</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>1000 <span style={{color:"red"}}><b>50% off</b></span></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                       <Button variant="text" color='error'>Remove</Button>
                      </div>

                    </div>
                  </div>

                </div>


              </div>
            </div>
            <div className="row d1">
              <div className="row container">
                <div className="col">
                  <div className="imgIn" style={{
                    backgroundColor: "black"
                  }}></div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-8">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1><b>Campus Sutra</b></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1 style={{ color: "red" }}>Car Item name</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <button onClick={increment} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>+</h1></button>
                        <div id='itemsCount' style={{height:"40px",width:"40px",textAlign:"center",fontSize:"24px"}}>
                        0
                        </div>
                        <button onClick={decrement} type="button" className="btn" style={{
                          backgroundColor:"red",
                          color:"white",
                          height:"40px",
                          width:"40px",
                          textAlign:"center"
                        }}><h1>-</h1></button>
                        
                      </div>
                    </div>
                    <div className="col">
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>500</h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                        <h1>1000 <span style={{color:"red"}}><b>50% off</b></span></h1>
                      </div>
                      <div className="row" style={{
                        marginTop: "10px"
                      }}>
                       <Button variant="text" color='error'>Remove</Button>
                      </div>

                    </div>
                  </div>

                </div>


              </div>
            </div>
            <div className="row btnDiv">
            <Button variant="contained" component="label" color='error' style={{
              height:"40px",
              width:"140px"
            }}>
              Place Order
           </Button>
            </div>
          </div>
          <div className="col"></div>

        </div>
        <div className="container bottomImg">
        <img src={img1} alt="" className='image2' /><br />
        <h1>2015 tatvasoft.com All Rights reserved</h1>
      </div>
      
      </div>
    </div>
  )
}

export default Cart