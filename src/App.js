import Aplicacao from "./components/Aplicacao"
import Rodape from "./components/Rodape"
import React from "react"

export default function App() {

  const [cartoesAbertos, setCartoesAbertos] = React.useState([]);
  const [respostasAbertas, setRespostasAbertas] = React.useState([]);
  console.log(respostasAbertas)



  function abrirCard(cartao) {
    setCartoesAbertos([...cartoesAbertos, cartao]);
  }

  function abrirResposta(cartao) {
    removerObjetoCartoesAbertos(cartao);
    setRespostasAbertas([...respostasAbertas, cartao]);
  }

  function removerObjetoCartoesAbertos(objeto) {
    const novoArray = [];
    for (let i = 0; i < cartoesAbertos.length; i++) {
      if (cartoesAbertos[i].question != objeto.question) {
        novoArray.push(cartoesAbertos[i]);
      }
    }
    setCartoesAbertos(novoArray);
  }

  return (
    <>
      <Aplicacao abrirCard={abrirCard} cartoesAbertos={cartoesAbertos} abrirResposta={abrirResposta} respostasAbertas={respostasAbertas} />
      <Rodape />
    </>
  )
}