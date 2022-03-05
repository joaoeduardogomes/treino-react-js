import React/*, { useState }*/ from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    


    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/> {/* pra fazer funcionar a função de validar CPF, precisamos passar os parâmetros "aoENviar" e "validarCPF" */}
            <DadosUsuario/>
            <DadosEntrega/>
        </>
    );
}

export default FormularioCadastro;
