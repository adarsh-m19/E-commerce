import React from 'react'
import Header from '../components/Header'
import { Card, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../Redux/wishlistSlice';
import { addCartItem } from '../Redux/cartSlice';



function Wishlist() {
  
  const dispatch=useDispatch()
  const userCart=useSelector(state=>state.cartReducer)
  const wish=useSelector(state=>state.wishlistReducer)
   console.log(wish);
 const handleCart=(item)=>{

  const existingProduct=userCart?.find(product=>product.id==item.id)
  if(existingProduct){
    alert("product quantity incrimented")
    dispatch(addCartItem(item))
    dispatch(removeWishlistItem(item.id))
  }
  else{
    dispatch(addCartItem(item))
    dispatch(removeWishlistItem(item.id))
  }

 }
   
   

  return (
    <>
      <Header />

      <div  className='container' style={{marginTop:'150px'}}>
      <h4 className='text-warning'>Your Wishlist <i class="fa-solid fa-heart-circle-plus text-danger"></i></h4>
          
          <Row>
          

            {
              wish?.length>0 ?
              
               wish.map(product=>(
                <Col xl={3} lg={4} md={6} xs={12}>
                <Card  style={{ width: '17rem' }}>
                <Card.Img className='rounded' variant="top" src={product.thumbnail} height='200px' />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <div className='d-flex justify-content-between mt-4'>
                  <button onClick={()=>dispatch(removeWishlistItem(product.id))} className='btn btn-outlined'><i class="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                  <button onClick={()=>handleCart(product)} className='btn btn-outlined'><i class="fa-solid fa-cart-plus text-success"></i></button>
                  </div>
                
                </Card.Body>
              </Card>
              </Col>
               ))
               :
               <div className='d-flex align-items-center text-center text-danger fs-3 fw-bold justify-content-center flex-column' style={{marginTop:'50px'}}>
                <img src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-comicstyle-wishlist-icon-with-splash-effect-health-sign-add-vector-png-image_41870708.jpg" alt="" />
                Wish list is Empty
                </div>
            }

           

          
        </Row>

      </div>
    </>
  )
}

export default Wishlist