import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
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
        <div className="container-fluid py-3 container-details h-100 d-flex justify-content-center flex-column align-items-center">
            <h1 className="text-white my-2 p-2">Detalles del personaje</h1>
            <div className="card">
            <img className="card-img-top" src={res[0]?.image} alt={res[0]?.name} />
            <div className="card-body">
                <h2 className="card-title text-center">{res[0]?.name} </h2>
                <p className="pDetails"><span>Especie</span> {res[0]?.species}</p>
                <p className="pDetails"><span>Estado</span> {res[0]?.status}</p>
                <p className="pDetails"><span>Genero</span> {res[0]?.gender}</p>
                <p className="pDetails"><span>Ubicacion</span> {res[0]?.location.name}</p>
                <p className="pDetails"><span>Origen</span> {res[0]?.origin.name}</p>
            </div>
            </div>
            <Link to={`/home`}>
                    <button className="btn my-2 text-white btn-info">← Volver</button>
                </Link>
            </div>   
            // <div className="card" style="width: 18rem;">
            //     <img className="card-img-top" src="..." alt="Card image cap"/>
            // <div className="card-body">
            //     <h5 className="card-title">Card title</h5>
            //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     <a href="#" className="btn btn-primary">Go somewhere</a>
            // </div>
            // </div>
            
                 
    )
}

export default Detail