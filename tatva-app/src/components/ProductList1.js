import React from 'react'
import './ProductList.css'
import Button from '@mui/material/Button';
import img1 from '../images/download.png';


function ProductList() {
  return (
    <div>
      <div className="container mainDiv">
        <div className="container productTitle">
          <h1 style={{
            fontSize: "32px",
            color: "#414141"
          }}>Product Listing</h1>
        </div>
        <div className="container row productName">
          <div className="col"><h1 style={{
            fontSize: "18px"
          }}>Product Name- 14366 items</h1></div>
          <div className="col"></div>
          <div className="col">Sort By <select name="" id="sort" style={{
            width: "200px",
            height: "40px",
            border: "2px solid grey",


          }}>

            <option value="az">a-z</option>
            <option value="num">1-10</option>
          </select>
          </div>
        </div>
        <div className="conatiner row" style={{
          marginTop: "80px"
        }}>
          <div className="d-flex flex-row container con1">
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
          </div>
          <div className="d-flex flex-row container con2">
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
            <div className="insideBox flex-column">
              <div className="imgbox">

              </div>
              <div className="contentBox">
                <div className="container">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>Product Title</b></h1>
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>Lorem</h1><br />
                  <h1 style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet consectetur adipisicing alit. Hic qui facere voluptas quibusdam, repeliat quia ex blanditiis recusandar odia sint!</h1>
                  <br />
                  <h1>MRP $1000 <spam style={{
                    color: "green"
                  }}><b>20.00% OFF</b></spam></h1>
                  <h1>$800</h1><br />


                </div>
                <div className="container" style={{
                  justifyContent: "center"
                }}>
                  <Button variant='contained' color="error" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>

          </div>

        </div>
        
        <div className="container row" style={{
          
          marginTop: "40px"
        }}>
          <div className="col"></div>
          <div className="col-5">
            <Button disabled><i className="fa-solid fa-chevron-left"></i></Button>
            <Button variant='contained' color="error" style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px"
            }}>1</Button>
            <Button variant='text' style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px",
              backgroundColor: "transparent",
              color: "black"
            }}>2</Button>
            <Button variant='text' style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px",
              backgroundColor: "transparent",
              color: "black"
            }}>3</Button>
            <Button variant='text' style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px",
              backgroundColor: "transparent",
              color: "black"
            }}>4</Button>
            <Button variant='text' style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px",
              backgroundColor: "transparent",
              color: "black"
            }}>5</Button>
            <Button variant='text' disabled style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px",
              backgroundColor: "transparent",
              color: "black"
            }}>...</Button>
            <Button variant='text' style={{
              borderRadius: "100%",
              height: "50px",
              width: "20px",
              backgroundColor: "transparent",
              color: "black"
            }}>10</Button>
            <Button variant="text" style={{
              color: "black"
            }}><i className="fa-solid fa-chevron-right"></i></Button>

          </div>
          <div className="col"></div>

        </div>
        

      </div>
      <div className="container bottomImg">
                    <img src={img1} alt="" className='image2' /><br />
                    <h1>2015 tatvasoft.com All Rights reserved</h1>
                </div>

      
    </div>
  )
}

export default ProductList