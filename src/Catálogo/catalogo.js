import { useEffect, useState } from "react"
import "./catalogo.css"
import axios from "axios";
import {Link} from "react-router-dom";



function Catalogo(){
    const [capas, setCapas] = useState([])
    useEffect(()=>{
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        requisicao.then(resposta =>{
            const novaArray = resposta.data
            setCapas(novaArray)
        });
    }, []);

    return (
        <div className="telaPrincipal">
       
            <div className="escolha">
                <p>Selecione o filme</p>
            </div>
            <div className="catalogo">
            {capas.length === 0 ? <p>CARREGANDO...</p> :
            capas.map((value,index) =>
                <Link to={`/filme/${value.id}`}>
                <div key={index} className="fundCapaFilme">
                <img src={value.posterURL} alt="-"/>
                </div>
                </Link>
            )}
             
            </div>
        </div>
    )
}

export default Catalogo