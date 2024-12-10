import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { searchProducts } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';



function Header({insideHome}) {
  const dispatch=useDispatch()
 const userCart=useSelector(state=>state.cartReducer)
  const userwish=useSelector(state=>state.wishlistReducer)

  return (
    <>
     <Navbar expand="lg" className="bg-primary position-fixed w-100 top-0" style={{zIndex:10}}>
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'} className='fw-bold text-white text-decoration-none fs-2'><i class="fa-solid fa-store">&nbsp;</i>Fashion Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {
            insideHome &&
              <Nav.Link><input onChange={e=>{dispatch(searchProducts(e.target.value.toLowerCase()))}} type='text'className='text-dark rounded p-1 me-5' placeholder='Enter'style={{width:'500px'}}/></Nav.Link>
          }
            <Nav.Link><Link className='text-danger fs-5' to={'/wishlist'}><i class="fa-solid fa-heart"></i></Link><Badge bg="secondary">{userwish.length}</Badge></Nav.Link>
            <Nav.Link ><Link className='text-white fs-5' to={'/cart'}><i class="fa-solid fa-cart-shopping"></i></Link><Badge bg="secondary">{userCart?.length}</Badge></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header