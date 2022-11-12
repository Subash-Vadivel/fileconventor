import React from 'react';
import '../CSS/w2p.css';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
const W2p = () => {
  return (
    <>
    <div className='form-wrapper'>
    
    <MDBRow center>
        <MDBCol size='4'>
    <form>
        <h2 className='head-form'>Convert WORD to PDF</h2>
      <MDBInput className='mb-4' type='file' name='filesrc' id='form1Example1' />


      <MDBBtn type='submit' block style={{backgroundColor:'#f58634'}}>
        Convert
      </MDBBtn>
    </form>
    </MDBCol>
    </MDBRow>
    </div>
    </>
  )
}

export default W2p