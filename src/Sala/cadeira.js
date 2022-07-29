import { useState } from "react";

export default function Cadeira({numero, disponibilidade}){
    const [selecionado, setSelecionado] = useState("disponivel")

    function marcar(estado){
        if(estado === "disponivel"){
            return setSelecionado("marcado")
        }else if( estado === "marcado"){
            return setSelecionado("disponivel")
        }
    }
    return(
        <div className={ disponibilidade ? `cadeira ${selecionado}` : "cadeira indisponivel"} onClick={()=>marcar(selecionado)}><p>{numero}</p></div>
    );
}