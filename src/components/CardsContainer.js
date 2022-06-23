import Card from "./Card"
import "../styles/cardsContainer.css"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import SearchBar from "./SearchBar"
import Filters from "../components/Filters/Filters"
import Pagination from "./Pagination"
import ReactPaginate from "react-paginate"

const CardsContainer = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    const [ apiInfo, setApiInfo ] = useState([])
    let {info, results } = apiInfo;
    let [status, setStatus] = useState("");
    let [gender, setGender] = useState("");
    let [species, setSpecies] = useState("");

    

    const url = `https://rickandmortyapi.com/api/character/?name=${search}&page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`
    // const dispatch = useDispatch()
    

    useEffect(() => {
        (async function () {
            let data = await fetch(url).then((res) => res.json());
            setApiInfo(data);
        })();
    }, [url]);
    
    return (
        
        <div className="contenedor">
            <h1 className="titleContainer">Rick & Morty <span>Wiki</span></h1>
            <div className="linkContainer mt-4">
                <SearchBar setSearch={setSearch}/>
            </div>
            <div className="container-all">
                <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
                <div className="container-cards col-lg-8">
                    {apiInfo.results?.map( obj => <Card  id={obj.id} url={obj.image} name={obj.name} status={obj.status} location={obj.location.name}/>)}
                </div>
            </div>
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
        
    )
}


export default CardsContainer