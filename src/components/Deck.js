import styled from "styled-components"
import Card from "./Card"
import cards from "../cards.js"

export default function Deck(props) {


    return (
        <Container>
            {cards.map((carta, index) => <Card cartoesFinalizados={props.cartoesFinalizados} finalizarCard={props.finalizarCard} respostasAbertas={props.respostasAbertas} abrirResposta={props.abrirResposta} cartoesAbertos={props.cartoesAbertos} abrirCard={props.abrirCard} carta={carta} pergunta={carta.question} resposta={carta.answer} indice={index} />)}
        </Container>
    )
}

const Container = styled.div`
    width: 80vw;
`