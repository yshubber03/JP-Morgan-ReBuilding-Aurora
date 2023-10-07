import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import './_Navbar.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const _Navbar = ({props}) => {
  useEffect(() => {
    if(localStorage.getItem('email') != ''){
      document.getElementById('signinnav').classList.remove('navoption')
      document.getElementById('signinnav').style.cursor = "auto"
    }
    
  })
  const location = useLocation();
  const signpath = (localStorage.getItem('email') == '') ? "/signin" : location.pathname;
  const navigate = useNavigate();
  var signintext = (localStorage.getItem('email') == '') ? "Sign in" : "Signed in!"
  // bootstrap code for navbar
  // everything in Navbar.Collapse tag is collapsible
  return(
    <Navbar bg="white" expand="sm" className="shadow-sm _navbar">
      <Container fluid>
        <Navbar.Brand style={{cursor: "pointer"}} className="" onClick={()=>{navigate("/")}}>
        <img src="http://images.squarespace-cdn.com/content/v1/55e48a8ce4b0a8e051b2aea3/1581533791977-LXZWE6Q3JU2GPGEGK0QQ/RTA+logo+2.JPG?format=1500w" id="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={()=>{navigate(signpath)}} className="text-dark navoption" id="signinnav">
              {signintext}
            </Nav.Link>
            <Nav.Link onClick={()=>{navigate("/profile")}} className="text-dark navoption">
              Profile
            </Nav.Link>
            <Nav.Link onClick={()=>{navigate("/admin")}} className="text-dark navoption">
              Admin
            </Nav.Link>
            <Nav.Link onClick={()=>{navigate("/5")}} className="text-dark navoption">
              5
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default _Navbar