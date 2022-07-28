import "./sessoes.css"
import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"


export default function Sessoes(){
    const {idFilme} = useParams()
    const [sessoes, setSessoes] = useState({})
    const [dia, setDia] = useState(['carregando'])
    useEffect(()=>{
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        requisicao.then(resposta =>{
            const novaArray = resposta.data
            setSessoes(novaArray)
            setDia(novaArray.days)
        })
    },[]);

    function renderizarHoras(array){
        if(array !== undefined){
            return array.map((bolinha)=>
            <div className="hora">
                <p>{bolinha.name}</p>
            </div>)
        }else return
    }


    return( 
    
        <>
        <div className="telaPrincipal">
            <div className="escolha">
                <p>Selecione o horário</p>
            </div> 
            {sessoes.length === 0 && dia.length === 1 ? <p>CARREGANDO...</p> :
            dia.map((value, index) => 
                <div key={index} className="sessao">
                    <p>{value.weekday} - {value.date}</p>
                    <div className="horarios">
                        {renderizarHoras(value.showtimes)}
                    </div>
                </div>)}
        </div>
        <div className="rodape">
            <div className="posterInfo">
                <img src={sessoes.posterURL} alt="-"/>
            </div>
            <div className="informacoes">
            <p>{sessoes.title}</p>
            </div>
        </div>
        </>
    )
}