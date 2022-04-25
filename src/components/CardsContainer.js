import Card from "./Card"
import styled from "styled-components"
import { useState, useEffect } from "react"

const CardsContainer = () => {
    
    const Contenedor = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    const [ apiInfo, setApiInfo ] = useState([])

    const url = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(res => setApiInfo(res.results))
            .catch(e => console.log(e))
    },[])
    
    return (
        <Contenedor>
            {apiInfo?.map( obj => <Card id={obj.id} url={obj.image} name={obj.name} status={obj.status} location={obj.location.name}/>)}
        </Contenedor>
    )
}

export default CardsContainer