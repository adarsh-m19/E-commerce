import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../Redux/wishlistSlice'
import { addCartItem } from '../Redux/cartSlice'





function View() {

  const [product,setProduct]=useState({})
  console.log(product);
  const userwishlist=useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  const {id}=useParams()
  console.log(id);
  useEffect(() => {
  
    if(localStorage.getItem('products')){
      const allProducts=JSON.parse(localStorage.getItem('products'))
      console.log(allProducts);
      setProduct(allProducts.filter(item=>item.id==id)[0])
    }
  
    
  }, [])

  const handleWishlist=()=>{
      
    if(userwishlist.includes(product)){
      alert("product already added")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCartItem=()=>{
      
     const existingProduct=userCart.find(item=>item.id==product.id)

     if(existingProduct){
      dispatch(addCartItem(product))

      alert("product quantity incremented")
     }
    else{
      dispatch(addCartItem(product))
    }
  }
  
  
  return (
   <>
   <Header/>

   <div className='container-fluid ' style={{marginTop:'150px'}}>
    <div className='row mt-5'>
        <div className='col-lg-1'> </div>
        <div className='col-lg-4'>
        <img   style={{height:'250px',width:'400px'}} src={product?.thumbnail} alt=""/>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
            <h6 className='text-secondary'>PID : {product?.id} </h6>
            <h3>{product?.brand}</h3>
            <h5 className='text-danger'>{product?.price}</h5>
            <p style={{textAlign:'justify'}}>{product?.description}.</p>
             <div className="d-flex justify-content-between">
            <button onClick={handleWishlist} className='btn btn-outlined'><i class="fa-solid fa-heart-circle-plus text-danger"></i></button> 
            <button onClick={handleCartItem} className='btn btn-outlined'><i class="fa-solid fa-cart-plus text-success"></i></button>

            </div>
 
        </div>
    </div>
   </div>
   
   </>
  )
}

export default View