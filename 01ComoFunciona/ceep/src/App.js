import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas/listaDeNotas";
import  FormularioCadastro  from "./components/formularioCadastro/formularioCadastro"; //temos que importar o nome da classe. E colocamos entre <> como uma tag.
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
        notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}
        />
        
      </section>
    );
  }
}

export default App;
