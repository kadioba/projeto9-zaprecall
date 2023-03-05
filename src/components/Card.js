import styled from "styled-components"
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"

export default function Card(props) {


    const perguntaNoEstado = props.cartoesAbertos.find((o) => o.question === props.pergunta);
    console.log(perguntaNoEstado)

    return (
        <Cartao>
            <CartaoFechado>
                <h1>Perguntaa {props.indice + 1}</h1>
                <img src={setaPlay} alt="" onClick={() => props.abrirCard(props.carta)} />
            </CartaoFechado>
            <Pergunta perguntaNoEstado={perguntaNoEstado} >
                <h1>{props.pergunta}</h1>
                <img src={setaVirar} alt="" />
            </Pergunta>
            <Resposta>
                <h1>{props.resposta}</h1>
                <div>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </Resposta>
        </Cartao>
    )
}

const Cartao = styled.div`
    width: 80vw;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 25px;
`

const CartaoFechado = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 23px;
    }
`

const Pergunta = styled.div`
    display: ${props => props.perguntaNoEstado ? "flex" : "none"}; 
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
        height: 87px;
    }
`

const Resposta = styled.div`
    display: none;
    h1{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        height: 65px;
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