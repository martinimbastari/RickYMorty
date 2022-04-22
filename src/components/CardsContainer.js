import Card from "./Card"
import styled from "styled-components"

const CardsContainer = () => {
    
    
let arr = [
    {id: 1,name: "Juan", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaKSzDxYs5h688ljfy0SPQMJXo8KnY6Hcug&usqp=CAU", status: "Alive", location: "Paraná"},
    {id: 2, name:"Martin San Juan", url:"https://www.cronista.com/files/image/296/296981/5ffe0bca443ed.jpg", status:"Alive", location: "Madrid"},
    {id: 3, name:"Lucas Iglesia", url:"https://img.niadd.com/manga3/55/10037686/100312320/4188949_2021070511806.png", status:"Alive", location: "Santa Fe"},
    {id: 4, name:"Enri Torres", url:"https://resizer.glanacion.com/resizer/LIdhOl_47j_oyrDWR0IjuaXdT-g=/1200x746/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4JODY5QDBZAZFM5HSWO7AVVY5I.jpg", status:"Alive", location: "Huinca Renanco"},
    {id: 5, name:"Edwin Andres Higuita", url:"https://www.clarin.com/img/2021/07/07/emiliano-martinez-tapa-el-penal___kgfIQMsBe_640x361__1.jpg", status:"Alive", location: "Colombia"},
    {id: 6,name:"Rogelio Ramirez Camona", url:"https://media.a24.com/p/cd226781b1e5bcbdc244886b2af53444/adjuntos/296/imagenes/008/807/0008807281/1200x900/smart/la-roca-johnsonjpg.jpg", status:"Alive", location: "Santiago de Cali"}
]

    const Contenedor = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    
    return (
        <Contenedor>
            {arr.map( obj => <Card id={obj.id} url={obj.url} name={obj.name} status={obj.status} location={obj.location}/>)}
        </Contenedor>
    )
}

export default CardsContainer