import { useParams } from "react-router-dom"

function Detail(){
    const params = useParams()

    let arr = [
        {key: 1,name: "Juan", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaKSzDxYs5h688ljfy0SPQMJXo8KnY6Hcug&usqp=CAU", status: "Alive", location: "Paraná"},
        {key: 2, name:"Martin San Juan", url:"https://www.cronista.com/files/image/296/296981/5ffe0bca443ed.jpg", status:"Alive", location: "Madrid"},
        {key: 3, name:"Lucas Iglesia", url:"https://img.niadd.com/manga3/55/10037686/100312320/4188949_2021070511806.png", status:"Alive", location: "Santa Fe"},
        {key: 4, name:"Enri Torres", url:"https://resizer.glanacion.com/resizer/LIdhOl_47j_oyrDWR0IjuaXdT-g=/1200x746/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4JODY5QDBZAZFM5HSWO7AVVY5I.jpg", status:"Alive", location: "Huinca Renanco"},
        {key: 5, name:"Edwin Andres Higuita", url:"https://www.clarin.com/img/2021/07/07/emiliano-martinez-tapa-el-penal___kgfIQMsBe_640x361__1.jpg", status:"Alive", location: "Colombia"},
        {key: 6,name:"Rogelio Ramirez Camona", url:"https://media.a24.com/p/cd226781b1e5bcbdc244886b2af53444/adjuntos/296/imagenes/008/807/0008807281/1200x900/smart/la-roca-johnsonjpg.jpg", status:"Alive", location: "Santiago de Cali"}
    ]

    const res = arr.filter( obj => obj.key === Number(params.id))
    
    // params.id = 6
    // res = [{key: 6,name:"Rogelio Ramirez Camona", url:"https://media.a24.com/p/cd226781b1e5bcbdc244886b2af53444/adjuntos/296/imagenes/008/807/0008807281/1200x900/smart/la-roca-johnsonjpg.jpg", status:"Alive", location: "Santiago de Cali"}]
    
    console.log(params.id);
    return(
        <div>
            <h1>detalle</h1>
            {res[0].name}
            {res[0].status}
        </div>
    )
}

export default Detail