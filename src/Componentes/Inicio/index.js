import { useState} from "react";

import Logo from "./../../assets/img/logo.png"; // Importa a imagem como módulo
import "./style.css"; // Importa o CSS como módulo

function Inicio(){
    const [visivel, setVisivel] = useState(true);
    if(visivel){
    return(
        <div className="Inicio">
        <img src={Logo} alt="Logo Zap Recall"/>
        <h1>Zap-ReCall</h1>
        <button onClick={()=> setVisivel(false)}>Iniciar!</button>
        </div>
    )}
    return<></>
}

export default Inicio;