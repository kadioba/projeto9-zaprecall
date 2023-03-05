import Aplicacao from "./components/Aplicacao"
import Rodape from "./components/Rodape"
import React from "react"

export default function App() {

  const [cartoesAbertos, setCartoesAbertos] = React.useState([]);
  const [respostasAbertas, setRespostasAbertas] = React.useState([]);
  const [cartoesFinalizados, setCartoesFinalizados] = React.useState([]);
  console.log(cartoesFinalizados)

  function abrirCard(cartao) {
    setCartoesAbertos([...cartoesAbertos, cartao]);
  }

  function abrirResposta(cartao) {
    removerObjetoCartoesAbertos(cartao);
    setRespostasAbertas([...respostasAbertas, cartao]);
  }

  function finalizarCard(cartao, resultado) {
    removerObjetoRespostasAbertas(cartao)
    cartao.resultado = resultado;
    setCartoesFinalizados([...cartoesFinalizados, cartao])

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

  function removerObjetoRespostasAbertas(objeto) {
    const novoArray = [];
    for (let i = 0; i < respostasAbertas.length; i++) {
      if (respostasAbertas[i].question != objeto.question) {
        novoArray.push(respostasAbertas[i]);
      }
    }
    setRespostasAbertas(novoArray);
  }

  return (
    <>
      <Aplicacao finalizarCard={finalizarCard} abrirCard={abrirCard} cartoesAbertos={cartoesAbertos} abrirResposta={abrirResposta} respostasAbertas={respostasAbertas} />
      <Rodape />
    </>
  )
}