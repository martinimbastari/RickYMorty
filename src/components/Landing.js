import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../styles/landing.css"

class Landing extends Component{

    render(){
        return(
            <div className="containerLanding">
                <div className="infoLanding">
                    <h2 className="landingTitle">Rick and Morty <span>WIKI</span> </h2>
                    <p>Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Roiland es el encargado de darle voz a Rick y a Morty, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
                       </p>
                    <Link to="/home">
                    <button className="boton">Ingresar</button>
                </Link>
                </div>
                
                
            </div>
        )
    }
}

export default Landing