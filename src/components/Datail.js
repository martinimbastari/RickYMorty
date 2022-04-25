import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Detail(){
    const params = useParams()

    const [ apiInfo, setApiInfo ] = useState([])

    const url = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(res => setApiInfo(res.results))
            .catch(e => console.log(e))
    },[])

    const res = apiInfo?.filter(char => char.id == Number(params.id))
    
    return(
        <div>
            <img src={res[0]?.image} alt={res[0]?.name} />
            <h2>{res[0]?.name} the {res[0]?.species}</h2>
            <p>{res[0]?.status}</p>
            <p>{res[0]?.location.name}</p>
        </div>            
    )
}

export default Detail