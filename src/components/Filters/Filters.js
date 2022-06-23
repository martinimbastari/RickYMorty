import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

import "../../styles/filters.css"

export default function Filters({setStatus, setPageNumber, setGender, setSpecies}) {
  let clear = () =>{
    setStatus("");
    setPageNumber("");
    setGender(""); 
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 px-5">
        <div className='text-center text-white fw-bold fs-4 mb-2'>Filters</div>
        <div onClick={clear} style={{cursor: "pointer"}} className='text-center text-decoration-underline text-primary mb-4'>Clear Filters</div>

        <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species  setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      
</div>
    </div>
  )
}
