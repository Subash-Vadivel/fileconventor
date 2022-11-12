import React from 'react'
import '../CSS/p2w.css';
import axios from 'axios';
import { useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
const P2w = () => {
  const [file,setFile]=useState("");
  const [out,setOut]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    var data={file,};
    axios
    .get('http://localhost:5000/conversion', data{
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => console.log('Success'),
     this.callAPI()
    )
    .catch(err => {
      alert(err);
    });
           
  };

  function callAPI()
  {
     //API request
     axios.get("http://localhost:5000/conversion").then(response => {
        
      //getting and setting api data into variable
      
      setOut({ data : response.data });
      
      })
  }





  const onChangeFile = e => {
    console.log('picture: ', file);
    setFile(...file, e.target.files[0]);
};
  return (
    <>
    <div className='form-wrapper'>
    
    <MDBRow center>
        <MDBCol size='4'>
    <form onSubmit={handleSubmit}>
        <h2 className='head-form'>Convert PDF to WORD</h2>
      <MDBInput className='mb-4' type='file' accept='.pdf' onChange={onChangeFile}  id='form1Example1' />
      <MDBBtn type='submit' block  style={{backgroundColor:'#f58634'}} >
        Convert
      </MDBBtn>
    </form>
    </MDBCol>
    </MDBRow>
    </div>
    </>
  )
}

export default P2w