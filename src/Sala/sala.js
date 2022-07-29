import { useEffect, useState } from "react";
import "./sala.css"
import Cadeira from "./cadeira";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Sala(){
    const {idSessao} = useParams()
    const [importe, setImporte] = useState([])
    const [dia, setDia] = useState([])
    const [filme, setFilme] = useState([])
    const [assentos, setAssentos] = useState([])


    useEffect(()=> {
        let requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
        requisicao.then(resposta =>{
            const novaArray = resposta.data
            setImporte(novaArray)
            setAssentos(novaArray.seats)
            setDia(novaArray.day)
            setFilme(novaArray.movie)
        })
    },[])
    
    return(
    <>
        <div className="telaPrincipal">
       
        <div className="escolha">
            <p>Selecione o(s) assento(s)</p>
        </div>
        <div className="conteudo">
            <div className="cadeiras">
                {assentos.map((value, index)=>
                <Cadeira key={index} numero={value.name} disponibilidade={value.isAvailable}/>
                )}
            </div>
            <div className="legenda">
                <div>
                    <div className={`cadeira disponivel`}></div>
                    <p>Disponivel</p>
                </div>
                <div>
                    <div className={`cadeira marcado`}></div>
                    <p>Selecionado</p>
                </div>
                <div>
                <div className={`cadeira indisponivel`}></div>
                    <p>Indisponivel</p>
                </div>
            </div>
            {/* forms */}
        </div>
        </div>
         <div className="rodape">
         <div className="posterInfo">
             <img src={filme.posterURL} alt="-"/>
         </div>
         <div className="informacoes">
         <p>{filme.title}</p>
         <p>{dia.weekday} - {importe.name}</p>
         </div>
     </div>
    </>
    );
}