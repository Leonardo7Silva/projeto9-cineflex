import { useEffect, useState } from "react";
import "./sala.css"
import Cadeira from "./cadeira";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Sucesso from "../Sucesso/sucesso";

export default function Sala({
    importe, 
    dias, 
    filme, 
    assentos, 
    cadeiras, 
    nomeComprador, 
    cpfComprador, 
    mudancas, 
    adicionarCadeira,
    mudarComprador,
    mudarCpfComprador}){
    const {idSessao} = useParams()
    const navigate= useNavigate();

    function pedirCadeiras(event) {
		event.preventDefault();
        const pacote = 
        {
			ids: cadeiras,
			name: nomeComprador,
            cpf: cpfComprador
		}
        console.log(pacote)
		const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", pacote);
        requisicao.then(navigate("/sucesso"))
    }



    useEffect(()=> {
        let requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)
        requisicao.then((resposta) => mudancas(resposta))
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
                <Cadeira 
                key={index} 
                numero={value.name} 
                disponibilidade={value.isAvailable}
                adicionarCadeira={adicionarCadeira}
                />
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
            <form onSubmit={pedirCadeiras}>
            <label><p>Nome do comprador:</p></label>
            <input 
            type="text" 
            placeholder="Digite seu nome..."
            value={nomeComprador}
            onChange={event => mudarComprador(event.target.value)}
            required/>
            <label><p>CPF do comprador:</p></label>
            <input type="text" 
            placeholder="Digite seu CPF..."
            value={cpfComprador}
            onChange={event => mudarCpfComprador(event.target.value)}
            required/>
            <div className="corno"><button type="submit"><p>Reservar assento(s)</p></button></div>
            </form>
        </div>

        </div>
         <div className="rodape">
         <div className="posterInfo">
             <img src={filme.posterURL} alt="-"/>
         </div>
         <div className="informacoes">
         <p>{filme.title}</p>
         <p>{dias.weekday} - {importe.name}</p>
         </div>
     </div>
    </>
    );
}