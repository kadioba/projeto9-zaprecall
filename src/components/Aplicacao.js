import Deck from "./Deck";

import styled from "styled-components";
import logo from "../assets/logo.png"

export default function Aplicacao() {
    return (
        <TelaPrincipal>
            <Logo>
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
            </Logo>
            <Deck />
        </TelaPrincipal>
    )
}

const TelaPrincipal = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.div`
    width: 255px;
    height: 60px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
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