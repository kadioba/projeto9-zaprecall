import Deck from "./Deck";

import styled from "styled-components";
import logo from "../assets/logo.png"

export default function Aplicacao(props) {
    return (
        <TelaPrincipal>
            <Logo>
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
            </Logo>
            <Deck cartoesFinalizados={props.cartoesFinalizados} finalizarCard={props.finalizarCard} abrirCard={props.abrirCard} cartoesAbertos={props.cartoesAbertos} abrirResposta={props.abrirResposta} respostasAbertas={props.respostasAbertas} />
        </TelaPrincipal>
    )
}

const TelaPrincipal = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10vh;
`

const Logo = styled.div`
    width: 255px;
    height: 60px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 42px;
    margin-bottom: 51px;
    img{
        width: 52px;
        height: 60px;
    }
    h1{
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        text-align: center;
        color: #FFFFFF;
        width: 200px;
    }
`