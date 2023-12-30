import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "././style/Navbar-data.css"



function Navbarr() {

  const Cart = useSelector(state=>state.Cart)
  const goto = ()=>{
    window.scrollBy(0,0)
  }

  return (
    <div className='first-Nav' >
           <Navbar expand="lg" className="bg-body-tertiary Navbar1 ">
      <Container className='Navbar-data'>
        <Link to="/" className='navbar-brand'>ShopWise</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar-data">
          <Link to="/Cart" className='nav-link win' onClick={goto}>Cart-{Cart.length}</Link>
            <Link to="/" className='nav-link'>Products</Link>
            <Link to="/" className='nav-link'>About</Link>
            <Link to="/" className='nav-link'>Contact us</Link>
            <Link to="/" className='nav-link'>pages</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr