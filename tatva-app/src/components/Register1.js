import React from 'react';
import Button from '@mui/material/Button';
import img1 from '../images/download.png';
import './Register1.css';


export default function Register1() {
  return (
    <div>
      {/* <Button variant="contained">Hello World</Button> */}
      <div className='container'>
        <div className="container Home">
          <div className="row">
            <div className="col">
              <Button variant='text' disabled>Home</Button><span>></span>
              <Button variant='text' color="error">Create an Account</Button>
            </div>
          </div>
          <div className="row" style={{
            marginTop: "50px"
          }}>
            <h1 style={{
              fontSize: "32px",
              fontStyle: "roboto"
            }}>Login or Create an Account</h1><br />
          </div>
        </div>
        <div className="container personal">
          <h1 style={{
            fontSize: "20px",
            fontStyle: "roboto"
          }}>Personal Information</h1><br /><hr />
          <br />
          <h1 style={{
            color: "grey"
          }}>Please enter the following information to create your account</h1><br />
          <div className="row container">
            <div className="col">
              <label htmlFor="FName">First Name</label><br />
              <input type="text" name="" id="FName" />
            </div>
            <div className="col">
              <label htmlFor="LName">Last Name</label><br />
              <input type="text" name="" id="LName" />
            </div>

          </div>
          <div className="container row email">
            <div className="col">
              <label htmlFor="email">Email Address *</label>
              <input type="email" name="" id="email" />
            </div>
          </div>


        </div>
        <div className="container login">
          <h1 style={{
            fontSize: "20px",
            fontStyle: "roboto"
          }}>Login Information</h1><br /><hr />
          <br />
          <div className="row container password">
            <div className="col">
              <label htmlFor="pass">Password *</label>
              <input type="password" name="" id="password" />
            </div>
            <div className="col">
              <label htmlFor="pass">Confirm Password *</label>
              <input type="password" name="" id="confirm" />
            </div>
          </div>
          <div className="row conatiner register">
            <div className="col">
            
              <Button variant='contained' color='error' style={{
                width:"136px",
                height:"45px"
              }}><h1>Register</h1></Button>
            </div>
            
          </div>
        </div>
        <div className="container bottomImg">
          <img src={img1} alt="" className='image2'/><br />
          <h1>2015 tatvasoft.com All Rights reserved</h1>
        </div>
      </div>
    </div>
  );
}
