import "../styles/Card.css"
import { Link } from "react-router-dom"

const Card = ({url, name, id, status, location}) => {

    let STATUS = status;
    return(
        <div className="card">
            <span className={STATUS}>{status}</span>
            <img src={url} alt={name} />
            <h2 className="title"> {name}</h2>
            <p className="pDescription location">Location: {location}</p>
            <Link to={`/detail/${id}`}>
                <button className="botonCard">Detail</button>
            </Link>
        </div>
    )
}

export default Card