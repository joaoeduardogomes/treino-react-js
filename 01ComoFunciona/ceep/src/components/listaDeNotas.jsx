import React, { Component } from "react";
import CardNota from "./cardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
                    return (
                        <li>
                            <span>{categoria}</span>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;