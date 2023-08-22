import React from "react";
import Card from "./Card";
import contatos from "../contatos";

function App() {
  return (
    <div>
      <h1>Meus contatos</h1>
      {
        contatos.map(contato => {
          return (
            <Card
              key={contato.id}
              nome={contato.nome}
              foto={contato.foto}
              alt={contato.alt}
              telefone={contato.telefone}
              email={contato.email}
            />
          )
        }
        )
      }
    </div>
  )

}


export default App;
