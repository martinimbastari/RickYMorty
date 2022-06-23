import React from 'react'

import "../styles/searchBar.css"

export default function SearchBar({setSearch}) {
  return (
    <form className='justify-content-center align-items-center d-flex flex-sm-row flex-column mb-5'>
        <input type="text"
                placeholder="Busca tu personaje" 
                className="input"
                onChange={e=>{
                    e.preventDefault();
                    setSearch(e.target.value);
                }}
                />
        <button className='botonSearch '>Buscar</button>
    </form>
  )
}
