import React from 'react';
import '../CSS/Footer.css';
import {
    MDBFooter,
  
  } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
  <>
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor:'whitesmoke' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='http://personal-portfolio-v.herokuapp.com/'>
          Team RIDO
        </a>
      </div>
    </MDBFooter>
  
  
  </>
  )
}

export default Footer