import styled from "styled-components"

export default function Chute({ativarTeclado, chute, chutarPalavra, setChute}) {

    return (
        <ChutarPalavra>
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={ativarTeclado} value={chute} onChange={(e) => setChute(e.target.value)} />
            <button data-test="guess-button" disabled={ativarTeclado} onClick={chutarPalavra} > Chutar </button>
        </ChutarPalavra>
    )
}

const ChutarPalavra = styled.div`
    display: flex;
    font-size: 25px;
    align-items: center;
    margin-left: 180px;
    p{
        font-weight: bold
    }
    input{
        height: 45px;
        margin-left: 15px;
        margin-right: 15px;
        border: none;
    }
    button{
        width: 150px;
        height: 48px;
        background-color: rgb(34, 168, 34);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 20px;
        letter-spacing: 2px;
        border: none;
    }
`