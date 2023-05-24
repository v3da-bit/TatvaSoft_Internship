import React from 'react'
import Button from '@mui/material/Button';
import img1 from '../images/download.png';
import './Login.css'

function Login() {
    return (
        <div>
            {/* <Button variant="contained">Hello World</Button> */}
            <div className='container'>
                <div className="container Home">
                    <div className="row">
                        <div className="col">
                            <Button variant='text' disabled>Home</Button><span>></span>
                            <Button variant='text' color="error">Login</Button>
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
                <div className="container row customer">
                    <div className="col">
                        <h1 style={{
                            fontSize: "20px",
                            fontStyle: "roboto"
                        }}>New Customer</h1>
                    </div>
                    <div className="col">
                        <h1 style={{
                            fontSize: "20px",
                            fontStyle: "roboto"
                        }}>Regsitered Customer</h1>
                    </div><br /><br />
                    <hr /><br />
                    <div className="col">
                        <h1 style={{
                            fontSize: "15px",
                            fontStyle: "roboto-light",
                            color: "#838383"
                        }}>Registration is free and easy</h1>
                    </div>
                    <div className="col">
                        <h1 style={{
                            fontSize: "15px",
                            fontStyle: "roboto-light",
                            color: "#838383"
                        }}>If you have an account with us.please log in</h1>
                    </div>
                    <div className="row container newCustomer" style={{
                        fontSize: "15px"
                    }}>
                        <div className="col">
                            <ul>
                                <li>Faster checkout</li>
                                <li>Save multiple shipping address</li>
                                <li>View and Track Orders</li>
                            </ul>

                        </div>
                        <div className="col Registered">
                            <label htmlFor="email">Email Address *</label><br />
                            <input type="text" name="" id="email" style={{
                                width: "400px"
                            }} />
                            <br /><br /><br />
                            <label htmlFor="password">Password *</label><br />
                            <input type="password" name="" id="password" style={{
                                width: "400px"
                            }} />


                        </div>

                    </div>
                    <div className="row container button">
                        <div className="col">
                            <Button variant='contained' color='error' style={{
                                width: "220px",
                                height: "45px"
                            }}>Create An Account</Button>
                        </div>
                        <div className="col">
                            <Button variant='contained' color='error' style={{
                                width: "100px",
                                height: "45px"
                            }}>Login</Button>

                        </div>
                    </div>
                </div>
                <div className="container bottomImg">
                    <img src={img1} alt="" className='image2' /><br />
                    <h1>2015 tatvasoft.com All Rights reserved</h1>
                </div>

            </div>
        </div>

    )
}

export default Login