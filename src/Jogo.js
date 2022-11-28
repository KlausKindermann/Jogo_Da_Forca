import styled from "styled-components"

export default function Jogo({imagem, LiberarJogo, palavraEscolhida, corPalavra, palavra}) {

    return (
        <ParteTopo>
            <ImagemTela data-test="game-image">
                <img src={imagem} alt="imagem da forca" />
            </ImagemTela>
            <Palavra>
                <EscolherPalavra data-test="choose-word" onClick={LiberarJogo} > Escolher palavra </EscolherPalavra>
                <PalavraCorreta data-test="word" data-answer={palavraEscolhida} cor={corPalavra} > {palavra} </PalavraCorreta>
            </Palavra>
        </ParteTopo>
    )
}
const ParteTopo = styled.div`
    display: flex;
    height: 500px;
    margin-top: 50px;
`
const ImagemTela = styled.div`
    width: 550px;
    img{
        height: 500px;
        width: 500px;
    }
`
const Palavra = styled.div`
    width: 400px;
`
const EscolherPalavra = styled.div`
    width: 200px;
    height: 70px;
    background-color: rgb(34, 168, 34);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: white;
    margin-top: 35px;
    margin-left: 150px;
    border: 2px rgb(6, 121, 6) solid;
`
const PalavraCorreta = styled.div`
    color: ${(props) => props.cor};
    width: 680px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    margin-top: 200px;
    letter-spacing: 2px;
    font-weight: bold;
`