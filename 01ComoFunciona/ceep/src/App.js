import React, { Component } from "react";
import ListaDeNotas from "./components/listaDeNotas";
import  FormularioCadastro  from "./components/formularioCadastro"; //temos que importar o nome da classe. E colocamos entre <> como uma tag.

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
