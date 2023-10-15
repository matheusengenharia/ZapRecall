
import LogoPequeno from "./../../assets/img/logo-pequeno.png";
import "./style.css";
import data from "./../../index.js";

function Deck(){
    return(
        <div className="Deck">
            <header>
                <img src={LogoPequeno} alt="Logo ZaReCall"/>
                <h1>ZaReCall</h1>
                <main>
                    <p>Flashacards</p>
                </main>
                <footer>
                    <p>0/4 Concluídos</p>
                </footer>
            </header>

        </div>

    )
}

export default Deck;