import "./sucesso.css"

export default function Sucesso({titulo, horario, cadeiras, nomeComprador, cpfComprador}){
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
                <p>24/06/2021 - {horario}</p>
            </div>

            <div className="confirmacoes">
                <h5>Ingressos</h5>
                {cadeiras.map(value => <p>Assento {value}</p> )}
            </div>

            <div className="confirmacoes">
                <h5>Comprador</h5>
                <p>Nome: {nomeComprador}</p>
                <p>CPF: {cpfComprador.slice(0,3)}.{cpfComprador.slice(3,6)}.{cpfComprador.slice(6,9)}-{cpfComprador.slice(9,11)}</p>
            </div>
        </div>
        </div>
        </>
    );
}