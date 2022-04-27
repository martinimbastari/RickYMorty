import React from 'react'
import { Link } from 'react-router-dom'
import CardsContainer from './CardsContainer'
import "../styles/home.css"

export default function Home () {
  return (
    <div className='homeContainer'>
        
        <CardsContainer />
    </div>
  )
}
