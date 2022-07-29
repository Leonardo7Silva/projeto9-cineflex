import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Catalogo from "../Catálogo/catalogo";
import Sessoes from "../Sessões/sessoes";
import Sala from "../Sala/sala";


function App(){


    return(
        <BrowserRouter>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <Routes>
            <Route path="/" element={<Catalogo/>}/>
            <Route path="/filme/:idFilme" element={<Sessoes/>}/>
            <Route path="/sessao/:idSessao" element={<Sala/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App