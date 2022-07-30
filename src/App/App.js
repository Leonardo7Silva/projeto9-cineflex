import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Catalogo from "../Catálogo/catalogo";
import Sessoes from "../Sessões/sessoes";
import Sala from "../Sala/sala";
import Sucesso from "../Sucesso/sucesso";
import { useState } from "react";


function App(){
    const [importe, setImporte] = useState([])
    const [dias, setDias] = useState([])
    const [filme, setFilme] = useState([])
    const [assentos, setAssentos] = useState([])
    const [nomeComprador, setNomeComprador] = useState("")
    const [cpfComprador, setCpfComprador] = useState("")
    const [cadeiras, setCadeiras] = useState([])

    function adicionarCadeira(id,cond1){
        let NumId = Number(id)
        const controle = cadeiras.filter((value)=> value === NumId)
        if(cond1){
        if(controle.length === 0){
            const novaArray = [...cadeiras,NumId]
            return setCadeiras(novaArray)
        }else {
            const controle2 = cadeiras.filter((value)=> value !== NumId)
            return setCadeiras(controle2);}
        }else return;
    }

    function mudancas(resposta){
        const novaArray = resposta.data
        setImporte(novaArray)
        setAssentos(novaArray.seats)
        setDias(novaArray.day)
        setFilme(novaArray.movie)
    }

    function mudarComprador(obj){
        setNomeComprador(obj)
    }

    function mudarCpfComprador(obj){
        setCpfComprador(obj)
    }

    return(
        <BrowserRouter>
            <div className="topo">
                <h1>CINEFLEX</h1>
            </div>
            <Routes>
            <Route path="/" element={<Catalogo/>}/>
            <Route path="/filme/:idFilme" element={<Sessoes/>}/>
            <Route path="/sessao/:idSessao" element={<Sala
            importe={importe}
            dias={dias}
            filme={filme}
            assentos={assentos}
            cadeiras={cadeiras}
            nomeComprador={nomeComprador}
            cpfComprador={cpfComprador}
            adicionarCadeira={adicionarCadeira}
            mudancas={mudancas}
            mudarComprador={mudarComprador}
            mudarCpfComprador={mudarCpfComprador}
            />}/>
            <Route path="/sucesso" element={<Sucesso
            titulo={filme.title}
            horario={importe.name}
            cadeiras={cadeiras}
            nomeComprador={nomeComprador}
            cpfComprador={cpfComprador}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App