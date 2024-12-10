import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className=" mt-5 w-100 bg-dark p-5" style={{ height: '400px' }}>

        <div className='row'>
          <div className="col-lg-4">
            <h5 className='text-white'><i class="fa-solid fa-store"></i>&nbsp; Fashion Store</h5>
            <p className='mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt amet at! Consequatur aliquid assumenda ad recusandae, odio hic accusamus similique, minus et tempore eveniet odit temporibus error repudiandae porro.</p>
            <p className='text-white'>currently v5.3.2</p>

          </div>


          <div className='col-lg-2 text-center '>
            <h5 className='mb-5 text-white'>Links</h5>
            <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></div>
            <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link></div>
            <div><Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link></div>

          </div>

          <div className='col-lg-2 '>
            <h5 className='mb-5 text-white'>Guides</h5>
            <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>react</Link></div>
            <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>bootsrap</Link></div>
            <div><Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>watch router</Link></div>

          </div>

          <div className='col-lg-4'>
            <h5 className='mb-5 text-white'>Contact Us</h5>
            <div className='d-flex justify-content-between'>
              <input className='form-control bg-white rounded p-3' type="text" placeholder='enter your email' />
              <button className='btn btn-info ms-3'> <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className='d-flex justify-content-between mt-3'>
              <a href="" style={{ fontSize: '20px', color: 'white' }}><i class="fa-brands fa-facebook"></i></a>
              <a href="" style={{ fontSize: '20px', color: 'white' }}><i class="fa-brands fa-twitter"></i></a>
              <a href="" style={{ fontSize: '20px', color: 'white' }}><i class="fa-brands fa-instagram"></i></a>
              <a href="" style={{ fontSize: '20px', color: 'white' }}><i class="fa-brands fa-linkedin"></i></a>
              <a href="" style={{ fontSize: '20px', color: 'white' }}><i class="fa-brands fa-github"></i></a>
              <a href="" style={{ fontSize: '20px', color: 'white' }}><i class="fa-solid fa-phone"></i></a>

            </div>
          </div>
        </div>
        <p className='text-center mt-5 text-white'>copyrigth © july 2024 Batch , Fashion Store , Built with react</p>
      </div>


    </>
  )
}

export default Footer