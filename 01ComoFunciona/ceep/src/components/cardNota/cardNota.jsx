import React, { Component } from "react";
import "./nota.css"
import {ReactComponent as DeleteSVG} from "../../assets/icones/icone-delete.svg";
//ou: import deleteSVG from "../../assets/icones/icone-delete.svg"; -> e importar como img src={deleteSVG}

class CardNota extends Component {

    apagar() {
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick = {this.apagar.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;