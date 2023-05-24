import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Editproduct.css';
import img1 from '../images/download.png';

let sty = {
  fontSize: 32,
  fontFamily: 'Roboto',
  color: '#414141'
}
export default function Editproduct() {
  return (

    <div>
      <div className="container EditMain">

        <div className="container row text-center">
          <div className="container row">
            <div className="col">
            </div>
            <div className="col" style={sty}>
              <strong>Edit Product</strong>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
        <div className="container row Name">
          <div className="col">
            First Name
            <input type="text" className="form-control" placeholder="First Name" aria-label="" aria-describedby="basic-addon1"></input>
          </div>
          <div className="col">
            Last Name
            <input type="text" className="form-control" placeholder="Last Name" aria-label="" aria-describedby="basic-addon1"></input>
          </div>
        </div>
        <div className="container row shop">
          <div className="col">
            Shop by Categories
            <input type="text" className="form-control" aria-label="" aria-describedby="basic-addon1"></input>
          </div>
          <div className="col">
            Description
            <input type="text" className="form-control" aria-label="" aria-describedby="basic-addon1"></input>
          </div>
        </div>
        <div className="container row img">
          <div className="col my-4">
            <Button variant="contained" component="label" color='error'>
              Upload
              <input hidden accept="image/*" multiple type="file" placeholder='No file Choosen'/>
            </Button>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="container row buttons">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success">
              Save
            </Button>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Stack>
        </div>
      <div className="container bottomImg">
        <img src={img1} alt="" className='image2' /><br />
        <h1>2015 tatvasoft.com All Rights reserved</h1>
      </div>
      </div>


    </div>

  )
}
