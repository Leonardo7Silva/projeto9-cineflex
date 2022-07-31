import { useState } from "react";

export default function Cadeira({numero, disponibilidade, adicionarCadeira, id}){
    const [selecionado, setSelecionado] = useState("disponivel")

    function marcar(estado){
        if(estado === "disponivel"){
            return setSelecionado("marcado")
        }else if( estado === "marcado"){
            return setSelecionado("disponivel")
        }
    }
    function chamarFuncao(){
        marcar(selecionado)
        adicionarCadeira(id,disponibilidade, numero)
    }
    return(
        <div className={ disponibilidade ? `cadeira ${selecionado}` : "cadeira indisponivel"} onClick={chamarFuncao}><p>{numero}</p></div>
    );
}