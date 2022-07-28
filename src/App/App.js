import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Catalogo from "../Catálogo/catalogo";
import Sessoes from "../Sessões/sessoes";


function App(){


    return(
        <BrowserRouter>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <Routes>
            <Route path="/" element={<Catalogo/>}/>
            <Route path="/filme/:idFilme" element={<Sessoes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App