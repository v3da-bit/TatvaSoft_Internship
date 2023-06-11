import React from 'react'
import { Button } from '@mui/material'

function HomeComp({Name,type,description,mrp,id}) {
  return (
    <>
    <div className="insideBox mt-6">
              <div className="imgbox">
                
                
              </div>
              <div className="contentBox">
                <div className="container mr-3 ml-3">
                  <div className=" h-20">
                  <h1 style={{
                    fontSize: "25px"

                  }}><b>{Name}</b></h1>
                  </div>
                  <div className="h-10">
                  <h1 style={{
                    color: "grey",
                    fontSize: "15px"
                  }}>{type}</h1><br />
                  </div>
                  <div className="h-14 text-left">
                  <h1 style={{ fontSize: "14px" }}>{description}</h1>
                  </div>
                  <div className="h-10">
                  <h1>{mrp} <spam style={{
                    color: "grey"
                  }}></spam>
                  </h1>
                  </div>
                </div>
                <div className="container m-3 bottom-1 h-10" style={{
                  
                }}>
                  <Button variant='contained' color="error" style={{
                    width: "90%"
                  }}>Add to Cart</Button>
                </div>

              </div>
            </div>
            </>    
  )
}

export default HomeComp