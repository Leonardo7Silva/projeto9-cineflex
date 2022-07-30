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
    const [nomeComprador, setNomeComprador] = useState("")
    const [cpfComprador, setCpfComprador] = useState("")
    const [cadeiras, setCadeiras] = useState([])
    

    function adicionarCadeira(id,cond1){
        const controle = cadeiras.filter((value)=> value == id)
        if(cond1){
        if(controle.length === 0){
            const novaArray = [...cadeiras,Number(id)]
            return setCadeiras(novaArray)
        }else {
            const controle2 = cadeiras.filter((value)=> value !== id)
            return setCadeiras(controle2);}
        }else return;
    }

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
        requisicao.then(console.log("deu bom"))
    }



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
            onChange={event => setNomeComprador(event.target.value)}
            required/>
            <label><p>CPF do comprador:</p></label>
            <input type="text" 
            placeholder="Digite seu CPF..."
            value={cpfComprador}
            onChange={event => setCpfComprador(event.target.value)}
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
         <p>{dia.weekday} - {importe.name}</p>
         </div>
     </div>
    </>
    );
}