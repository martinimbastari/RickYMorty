import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/details.css"

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
        <div className="container">
            <div className="infoCard">
            <img className="img" src={res[0]?.image} alt={res[0]?.name} />
            <h2 className="titleDetails">{res[0]?.name} <span>The {res[0]?.species}</span> </h2>
            <p className="pDetails">{res[0]?.status}</p>
            <p className="pDetails">{res[0]?.location.name}</p>
            </div>
            <div className="infoAbout">
                <h2 className="aboutTitle">About</h2>
                <p className="aboutP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque dolorem eaque pariatur, eos architecto commodi assumenda quod enim alias est molestias tempora sint labore laboriosam, explicabo sapiente? Eligendi, odio?</p>
                <p className="aboutP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat eveniet repudiandae omnis harum ratione, rem magni error quibusdam consectetur minus quae libero reiciendis unde ut beatae doloremque et deserunt.</p>
                <p className="aboutP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque autem odit distinctio alias impedit odio possimus illo neque aliquid pariatur, et iusto vitae laboriosam animi. Assumenda quo modi impedit neque.</p>
            </div>
            
        </div>           
    )
}

export default Detail