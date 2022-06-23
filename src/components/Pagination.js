import React from 'react'
import ReactPaginate from 'react-paginate';

import "../styles/pagination.css"

export default function Pagination({info, pageNumber, setPageNumber}) {
    
    

  return (
    <>
      <ReactPaginate 
      className='pagination justify-content-center gap-4 my-4 '
      forcePage={pageNumber===1? 0 : pageNumber -1}
      breakLabel="..."
      nextLabel="Next"
      nextClassName='btn btn-primary'
      previousLabel="Prev"
      previousClassName='btn btn-primary'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      onPageChange={(data) =>{
        setPageNumber(data.selected + 1)
      }}
      pageCount={info?.pages}/>
    
    </>
    
    // <div className='container-pagination'>
    //     <button onClick={prev}>Anterior</button>
    //     <button onClick={next}>Siguiente</button>
    // </div>
  )
}
