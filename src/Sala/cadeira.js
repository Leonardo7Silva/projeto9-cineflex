import { useState } from "react";

export default function Cadeira({numero, disponibilidade, adicionarCadeira}){
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
        adicionarCadeira(numero,disponibilidade)
    }
    return(
        <div className={ disponibilidade ? `cadeira ${selecionado}` : "cadeira indisponivel"} onClick={chamarFuncao}><p>{numero}</p></div>
    );
}