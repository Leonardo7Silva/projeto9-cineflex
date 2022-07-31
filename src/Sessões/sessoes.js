import "./sessoes.css"
import axios from "axios"
import { useEffect, useState } from "react"
import {useParams, Link ,useNavigate} from "react-router-dom"


export default function Sessoes(){
    const {idFilme} = useParams()
    const [sessoes, setSessoes] = useState({})
    const [dia, setDia] = useState(['carregando'])
    const navigate = useNavigate()
    useEffect(()=>{
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
        requisicao.then(resposta =>{
            const novaArray = resposta.data
            setSessoes(novaArray)
            setDia(novaArray.days)
        })
    },[]);

    function renderizarHoras(array){
        if(array !== undefined){
            return array.map((bolinha,index)=>
            <Link to={`/sessao/${bolinha.id}`}>
            <div key={index} className="hora">
                <p>{bolinha.name}</p>
            </div>
            </Link>)
        }else return
    }


    return( 
    
        <>
        <button className="voltar" onClick={()=> navigate(-1)}><ion-icon name="arrow-back-sharp"></ion-icon></button>
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