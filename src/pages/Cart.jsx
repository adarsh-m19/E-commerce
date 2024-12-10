import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, delCartItem, emptyCart, incQuantity } from '../Redux/cartSlice'
import { Link, Navigate, useNavigate } from 'react-router-dom'




function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const [totalProducts,setTotalProducts] =useState(0)
  const [totalAmount,setTotalAmount]=useState(0)



  const dispatch=useDispatch()
  const navigate=useNavigate
 useEffect(()=>{
  if(userCart?.length>0)
  {
    setTotalProducts(userCart.length)
    setTotalAmount(userCart.map(pro=>pro.totalPrice).reduce((t1,t2)=>t1+t2))
  }

  else{
    setTotalProducts(0)
    setTotalAmount(0)
  }
 }, [userCart])



  const handledeQuantity=(product)=>{
    if (product.quantity>1) {
      dispatch(decQuantity(product.id))
      
    }else{
      dispatch(delCartItem(product.id))
    }
  }
const CheckOut=()=>{
  dispatch(emptyCart())
  alert("order placed succesfull.... thank you for shopping with us!!")
  navigate('/')
}

  return (
    <>
    <Header/>



    <div className='container' style={{marginTop:'150px'}}>
      <div>
       <h3>Cart Summery</h3>
       {
        userCart?.length>0 ?
        <div className='row mt-4'>
        <div className='col-lg-8'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              
              {
                userCart?.map(product=>(
                
                <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td> <img width={'60px'} height={'50x'} src={product.thumbnail} alt=""  /></td>
              <td>
                <button onClick={()=>handledeQuantity(product)} className='btn fw-bold me-3'>-</button>
                <input className='border border-white' style={{width:'30px'}} type="text" readOnly value={product.quantity} />
                <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bold'>+</button>
              </td>
              <td>{product.totalPrice}</td>
              <td><button onClick={()=>dispatch(delCartItem(product.id))} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
              ))
              }
            </tbody>

          </table>
          <div style={{}}>
          <Link to={'/'} className='btn btn-primary me-2'> shop more</Link>
          <button  onClick={()=>dispatch(emptyCart())} className='btn btn-danger'> empty cart</button>
          </div>
  
        </div>

        <div className='col-lg-4'>

          <div className='shadow rounded p-4'>
            <h5>Total items: <span className='text-danger'>{totalProducts}</span></h5>
            <h4>Total Amount: <span className='text-danger'>{totalAmount}</span></h4>
            <button onClick={()=>dispatch(CheckOut())} className='btn btn-success w-100 mt-3'>Checkout</button>

          </div>

        </div>
       </div>
       :
       <div className='d-flex align-items-center text-center text-danger fs-3 fw-bold justify-content-center flex-column' style={{marginTop:'50px'}}>
                <img style={{width:'200px'}} src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctcC5wbmc.png" alt="" />
                Cart is empty
                </div>
       }
      </div>
    </div>
    </>
  )
}

export default Cart