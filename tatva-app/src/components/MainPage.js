import React from 'react'
import './Main.css';
import img1 from '../images/download.png';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
        <div className="container">
        <div className='container row upperredline'></div>
        <div className='container imagetatva row'>
                    <div className='col-9 imagetatva'>
                        <img src={img1} alt="" className='image1' />
                    </div>
                    <div className='col imagetatva'>
                        <div className='row imagetatva'>
                            <div className='col cartDiv'>
                                <button style={
                                    {
                                        textAlign: "center",
                                        color: "red",
                                        backgroundColor: "transparent",
                                        borderColor: "transparent",
                                        font: "14px"
                                    }

                                }
                                ><Link to="/login"> Login</Link></button>
                                <span style={{ color: "red" }}> | </span>
                                <button style={
                                    {
                                        textAlign: "center",
                                        color: "red",
                                        backgroundColor: "transparent",
                                        borderColor: "transparent",
                                        font: "14px"
                                    }

                                }
                                ><Link to="/register">Register</Link></button>


                                <button style={
                                    {
                                        textAlign: "center",
                                        marginLeft: "5px",
                                        width: "100.88px",
                                        height: "40px",
                                        backgroundColor: "transparent",
                                        font: "14px",
                                        border: "2px solid grey",
                                        borderRadius: "5px"
                                    }

                                }
                                ><Link to="/product"><span><ShoppingCartIcon variant="contained" style={{ color: "red" }}></ShoppingCartIcon>Cart</span></Link></button>

                            </div>

                        </div>


                    </div>
                </div>
                <div className="container search row">
                    <div className="container col">
                        <input type="search" name="search" id="search" placeholder='What you Are looking for..' />
                    </div>
                    <div className="container col">
                        <Button variant="contained" color='success' style={{
                            marginTop: "20px"
                        }}><SearchIcon variant="contained"></SearchIcon>Search</Button>
                        <Button variant="contained" color='error' style={{
                            marginTop: "20px",
                            marginLeft: "20px"
                        }}>Cancel</Button>
                    </div>
                </div>
                
        </div>
    </div>
  )
}

export default MainPage