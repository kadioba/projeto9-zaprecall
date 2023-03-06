import styled from "styled-components";
import cards from "../cards";

export default function Rodape(props) {
    return (
        <TelaRodape data-test="footer">
            <h1>{props.cartoesFinalizados.length}/{cards.length} CONCLUÍDOS</h1>
        </TelaRodape>
    )
}

const TelaRodape = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 2;
    background-color: #FFFFFF;;
    h1{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: #333333;
    }
`