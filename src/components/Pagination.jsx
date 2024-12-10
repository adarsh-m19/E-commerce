import React from 'react'

function Pagination({totalProducts,prodPerPage,setCurrentPage,currentpage}) {

    const pages=[]
for(let i=1;i<=Math.ceil(totalProducts/prodPerPage);i++){
    pages.push(i)
}
const handlePrevious=()=>{
    if(currentpage>=1){
        setCurrentPage(currentpage-1)
    }
}
const handleNext=()=>{
    if(currentpage<pages.length){
        setCurrentPage(currentpage+1)
    }
}
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <button onClick={handlePrevious} disabled={currentpage==1} className='btn me-2'><i class="fa-solid fa-arrow-left"></i></button>
        
        {
            pages?.map(page=>(
                <button onClick={()=>setCurrentPage(page)} className='btn me-2'>{page}</button>
            ))
        }
 <button onClick={handleNext} disabled={currentpage==pages.length}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
   
    </>
  )
}

export default Pagination