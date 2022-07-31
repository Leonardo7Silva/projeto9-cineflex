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
    const [cadeirasReservadas, setCadeirasReservadas] = useState([])

    function adicionarCadeira(id,cond1,nome){
        let NumId = Number(id)
        const controle = cadeiras.filter((value)=> value === NumId)
        const controle3 = cadeirasReservadas.filter((value)=> value === nome)
        if(cond1){
        if(controle.length === 0){
            const novaArray = [...cadeiras,NumId]
            const novaArray2 = [...cadeirasReservadas,nome]
            return setCadeiras(novaArray), setCadeirasReservadas(novaArray2);
        }else {
            const controle2 = cadeiras.filter((value)=> value !== NumId)
            const controle4 = cadeirasReservadas.filter((value)=> value !== nome)
            return setCadeiras(controle2), setCadeirasReservadas(controle4);}
        }else return;
    }

    function zerarCasas(){
        setCadeirasReservadas([])
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
            cpfComprador={cpfComprador}
            cadeirasReservadas={cadeirasReservadas}
            data={dias.date}
            zerarCasas={zerarCasas}
            />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App