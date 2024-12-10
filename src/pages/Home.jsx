import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../components/Pagination';








function Home() {
  const [currentpage,setCurrentPage]=useState(1)
  const [productPage,setProductPage]=useState(6)
  const { allProducts, loading, error } = useSelector(state => state.productReducer)
  console.log(allProducts);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())


  }, [])

  // for pagination

  const endingindex=currentpage*productPage
  const startingIndex=endingindex-productPage
  const currentProducts=allProducts.slice(startingIndex,endingindex)



  return (
    <>
      <Header insideHome={true} />

      <div className='container-fluid' style={{ marginTop: '150px' }}>
        {loading ?
          <div className='container' style={{ marginTop: '150px' }}>

            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          :
          <Row className='mt-5 ms-5 align-items-center justify-content-center'>
            {
              currentProducts?.length > 0 ?
              currentProducts?.map(product => (
                  <Col xl={3} lg={4} md={6} xs={12} className='mb-5 align-items-center justify-content-center'>
                    <Card style={{ width: '17rem' }}>
                      <Card.Img className='rounded' variant="top" src={product?.thumbnail} height='200px' />
                      <Card.Body>
                        <Card.Title className='mt-2'>{product?.title.slice(0,15)}...</Card.Title>
                        <div className='text-center mt-4'><Link to={`/view/${product?.id}`} className='text-danger text-decoration-none fw-bold'>View More...</Link></div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))

                :
                <div className='text-center text-danger fs-3 fw-bold'>Nothing to Display</div>
            }
          </Row>



        }
        {
          currentProducts?.length>0 &&
          <Pagination  totalProducts={allProducts.length}  prodPerPage={productPage} setCurrentPage={setCurrentPage} currentpage={currentpage}/>
        }
      </div>
    </>

  )
}

export default Home