import React from 'react'
import { Link } from 'react-router-dom'
import CardsContainer from './CardsContainer'

export default function Home () {
  return (
    <div>
        <Link to="/createCharacter">
            <button>Create</button>
        </Link>
        <CardsContainer />
    </div>
  )
}
