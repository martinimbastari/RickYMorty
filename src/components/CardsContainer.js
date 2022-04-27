import Card from "./Card"
import "../styles/cardsContainer.css"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const CardsContainer = () => {
    
    const Contenedor = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color:   #3A3845;
        
    `
    const [ apiInfo, setApiInfo ] = useState([])

    const url = "https://rickandmortyapi.com/api/character"

    function fetchingData(){
        fetch(url)
            .then(data => data.json())
            .then(res => setApiInfo(res.results))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchingData()
        return fetchingData()
    },[])
    
    return (
        
        <Contenedor>
            <div className="linkContainer">
                <span>Crea un personaje nuevo:</span>
                <Link to="/createCharacter">
                    <button className='botonCreate'>Create</button>
                </Link>
            </div>
            {apiInfo?.map( obj => <Card id={obj.id} url={obj.image} name={obj.name} status={obj.status} location={obj.location.name}/>)}
        </Contenedor>
        
    )
}


export default CardsContainer