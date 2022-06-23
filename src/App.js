
import { Routes, Route } from "react-router-dom"
import Landing from "./components/Landing"
import Detail from "./components/Detail"
import Form from "./components/Form"
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";

function App () {

  return(
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        {/* <Route exact path="/createCharacter" element={<Form />}/> */}
      </Routes>
    </>
  )
}

export default App

























