import "../styles/Card.css"
import { Link } from "react-router-dom"

const Card = ({url, name, id, status, location}) => {

    let STATUS = status;
    return(
        <div className="cards">
            <span className={STATUS}>{status}</span>
            <img src={url} alt={name} />
            <h2 className="title"> {name}</h2>
            <p className="pDescription location">Ubicacion: {location}</p>
            <Link to={`/detail/${id}`}>
                <button className="botonCard">Detalles</button>
            </Link>
        </div>
    )
}

export default Card