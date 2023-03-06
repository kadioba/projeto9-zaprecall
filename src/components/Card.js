import styled from "styled-components"
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import iconeCerto from "../assets/icone_certo.png"
import iconeQuase from "../assets/icone_quase.png"
import iconeErro from "../assets/icone_erro.png"

export default function Card(props) {


    const perguntaAberta = props.cartoesAbertos.find((o) => o.question === props.pergunta);
    const respostaAberta = props.respostasAbertas.find((o) => o.question === props.pergunta);
    const perguntaFinalizada = props.cartoesFinalizados.find((o) => o.question === props.pergunta);
    console.log(perguntaFinalizada)

    function corTextoCardFechado() {
        if (perguntaFinalizada) {
            if (perguntaFinalizada.status === "erro") {
                return "#FF3030"
            }
            else if (perguntaFinalizada.status === "parcial") {
                return "#FF922E"
            }
            else if (perguntaFinalizada.status === "acerto") {
                return "#2FBE34"
            }
        }
        else {
            return "#333333"
        }
    }

    function iconeCard() {
        if (perguntaFinalizada) {
            if (perguntaFinalizada.status === "erro") {
                return iconeErro
            }
            else if (perguntaFinalizada.status === "parcial") {
                return iconeQuase
            }
            else if (perguntaFinalizada.status === "acerto") {
                return iconeCerto
            }
        }
        else {
            return setaPlay
        }
    }



    return (
        <Cartao perguntaAberta={perguntaAberta} respostaAberta={respostaAberta}>
            <CartaoFechado perguntaFinalizada={perguntaFinalizada} corTextoCardFechado={corTextoCardFechado} perguntaAberta={perguntaAberta} respostaAberta={respostaAberta} >
                <h1>Pergunta {props.indice + 1}</h1>
                <button onClick={() => props.abrirCard(props.carta)} disabled={perguntaFinalizada ? true : false} >
                    <img src={iconeCard()} alt="" />
                </button>
            </CartaoFechado>
            <Pergunta perguntaAberta={perguntaAberta} >
                <h1>{props.pergunta}</h1>
                <img src={setaVirar} alt="" onClick={() => props.abrirResposta(props.carta)} />
            </Pergunta>
            <Resposta respostaAberta={respostaAberta}>
                <h1>{props.resposta}</h1>
                <div>
                    <button onClick={() => props.finalizarCard(props.carta, "erro")}>Não lembrei</button>
                    <button onClick={() => props.finalizarCard(props.carta, "parcial")}>Quase não lembrei</button>
                    <button onClick={() => props.finalizarCard(props.carta, "acerto")}>Zap!</button>
                </div>
            </Resposta>
        </Cartao>
    )
}

const Cartao = styled.div`
    width: 80vw;
    background-color: ${props => props.perguntaAberta || props.respostaAberta ? "#FFFFD4" : "#FFFFFF"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 25px;
`

const CartaoFechado = styled.div`
    display: ${props => props.perguntaAberta || props.respostaAberta ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        color: ${props => props.corTextoCardFechado};
        text-decoration-line: ${props => props.perguntaFinalizada ? "line-through" : "none"};
    }
    button{
        background-color: #11ffee00;
        border: none;
    }
    img{
        width: ${props => props.perguntaFinalizada ? "23px" : "20px"};
        height: 23px;
    }
`

const Pergunta = styled.div`
    display: ${props => props.perguntaAberta ? "flex" : "none"}; 
    flex-direction: column;
    justify-content: flex-start;
    img{
        width: 30px;
        height: 20px;
        align-self: flex-end;
    }
    h1{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        min-height: 87px;
    }
`

const Resposta = styled.div`
    display: ${props => props.respostaAberta ? "initial" : "none"};
    h1{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        min-height: 65px;
    }
    div{
        display: flex;
        justify-content: space-between;
    }
    button{
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
    }
    button:first-child{
        background-color: #FF3030;
    }
    button:nth-child(2){
        background-color: #FF922E;
    }
    button:nth-child(3){
        background-color: #2FBE34;
    }
`