import "./sucesso.css"
import { useNavigate } from "react-router-dom";

export default function Sucesso({titulo,zerarCasas, data, horario, nomeComprador, cpfComprador, cadeirasReservadas}){
    
    const navigate = useNavigate();
function chamar(){
    navigate("/");
    zerarCasas();
}

    return(
        <>
        <div className="telaPrincipal">
       
        <div className="escolha">
           <h6>Pedido feito com sucesso!</h6>
        </div>
        <div className="conteudo">
            <div className="confirmacoes">
                <h5>Filme e sessão</h5>
                <p>{titulo}</p>
                <p>{data} - {horario}</p>
            </div>

            <div className="confirmacoes">
                <h5>Ingressos</h5>
                {cadeirasReservadas.map(value => <p>Assento {value}</p> )}
            </div>

            <div className="confirmacoes">
                <h5>Comprador</h5>
                <p>Nome: {nomeComprador}</p>
                <p>CPF: {cpfComprador.slice(0,3)}.{cpfComprador.slice(3,6)}.{cpfComprador.slice(6,9)}-{cpfComprador.slice(9,11)}</p>
            </div>
            <div className="separador"></div>
            <div className="corno"><button onClick={chamar}><p>Voltar para Home</p></button></div>
        </div>
        </div>
        </>
    );
}