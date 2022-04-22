import "../styles/Card.css"

const Card = ({url, name, status, location}) => {
    return(
        <div className="card">
            <img src={url} alt={name} />
            <h2>Name: {name}</h2>
            <p>Status: {status}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default Card