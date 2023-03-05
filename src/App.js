import Aplicacao from "./components/Aplicacao"
import Rodape from "./components/Rodape"
import React from "react"

export default function App() {

  const [cartoesAbertos, setCartoesAbertos] = React.useState([]);
  console.log(cartoesAbertos)

  function abrirCard(cartao) {
    setCartoesAbertos([...cartoesAbertos, cartao]);
  }

  return (
    <>
      <Aplicacao abrirCard={abrirCard} cartoesAbertos={cartoesAbertos} />
      <Rodape />
    </>
  )
}