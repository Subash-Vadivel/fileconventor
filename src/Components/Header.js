import React,{useState} from 'react';
import '.././CSS/Header.css';
import logo from '../Images/COLOR.png';
import {useNavigate} from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,

    MDBIcon,
    MDBNavbarNav,

  } from 'mdb-react-ui-kit';
const Header = () => {
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);
    const navigate = useNavigate();
    return (
      <>
        <MDBNavbar expand='lg' className='nav-special'>
          <MDBContainer >
            <MDBNavbarToggler
              type='button'
              data-target='#navbarTogglerDemo01'
              aria-controls='navbarTogglerDemo01'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavNoToggler(!showNavNoToggler)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavNoToggler}>
              <MDBNavbarBrand href='#'><img
              src={logo}
              height='50'
              alt=''
              loading='lazy'
            /><span className='logotext'>Color File Conventor</span></MDBNavbarBrand>
              <MDBNavbarNav right fullWidth={false} className='menus mb-2 mb-lg-0 ' >
                
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={()=>{navigate('/')}} to='/' className="eff" active><span className='eff'>PDF to Word</span></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={()=>{navigate('/word2pdf')}} to='/word2pdf'  className="eff" active >
                  <span className='eff'>Word to PDF</span>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
}
;
export default Header;