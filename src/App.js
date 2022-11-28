import palavras from "./Palavras"
import alfabeto from "./Alfabeto";
import styled from "styled-components";
import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";



export default function App() {

    let [palavra, setPalavra] = useState([])
    let [imagem, setImagem] = useState("imagens/forca0.png")
    let [ativarTeclado, setAtivarTeclado] = useState("true")
    let [palavraEscolhida, setPalavraEscolhida] = useState([])
    let [contador, setContador] = useState(1)
    let [stringSemAcentos, setStringSemAcentos] = useState("")
    let [letrasTentadas, setLetrasTentadas] = useState(alfabeto)
    let [corPalavra, setCorPalavra] = useState("black")
    let [chute, setChute] = useState("")

    const Letras = [alfabeto.map((letra) =>
        <button data-test="letter" disabled={letrasTentadas.includes(letra)}  onClick={() => escolherLetra(letra)} >
            {letra}
        </button>)
    ];

    function LiberarJogo() {
        const indice = Math.floor(Math.random() * palavras.length);
        const palavra = palavras[indice]
        const dividirPalavra = palavras[indice].split("");
        let palavraEscondida = [];
        dividirPalavra.forEach((letra) => palavraEscondida.push(" _"))
        const novaPalavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        setStringSemAcentos(novaPalavra)
        setAtivarTeclado(false)
        setPalavraEscolhida(dividirPalavra);
        setPalavra(palavraEscondida);
        setImagem("imagens/forca0.png")
        setContador(1)
        setLetrasTentadas([])
        setCorPalavra("black")
    }
    function escolherLetra(l) {
        setLetrasTentadas([...letrasTentadas, l])
        if (palavraEscolhida.includes(l)) {
            acertouLetra(l)
        } else {
            errouLetra()
        }
    }
    function acertouLetra(l) {
        const novaPalavra = [...palavra]
        palavraEscolhida.forEach((letra, i) => {
            if (stringSemAcentos[i] === l) {
                novaPalavra[i] = letra
            }
        })
        setPalavra(novaPalavra)
        if (!novaPalavra.includes(" _")) {
            setCorPalavra("green")
            setLetrasTentadas(alfabeto)
            setAtivarTeclado(true)
        }
    }
    function errouLetra() {
        setContador(contador + 1);
        mudarContador()
        if (contador === 6) {
            setCorPalavra("red")
            setPalavra(palavraEscolhida)
            setLetrasTentadas(alfabeto)
            setAtivarTeclado(true)
        }
    }
    function mudarContador() {
        if (contador === 0) {
            setImagem("imagens/forca0.png");
        }
        if (contador === 1) {
            setImagem("imagens/forca1.png");
        }
        if (contador === 2) {
            setImagem("imagens/forca2.png");
        }
        if (contador === 3) {
            setImagem("imagens/forca3.png");
        }
        if (contador === 4) {
            setImagem("imagens/forca4.png");
        }
        if (contador === 5) {
            setImagem("imagens/forca5.png");
        }
        if (contador === 6) {
            setImagem("imagens/forca6.png");
            setTimeout(aviso, 200);
            setAtivarTeclado(true);
        }
    }
    function aviso() {
        alert("Você perdeu :(");
    }
    function chutarPalavra() {
        let escolhidaString = palavraEscolhida.join("")
        if (chute === escolhidaString) {
            setCorPalavra("green")
            setLetrasTentadas(alfabeto)
            setAtivarTeclado(true)
            setPalavra(palavraEscolhida)
        } else {
            setContador(6)
            setCorPalavra("red")
            setPalavra(palavraEscolhida)
            setLetrasTentadas(alfabeto)
            setAtivarTeclado(true)
            aviso()
        }
    }

    return (
        <>
            <Jogo
            imagem = {imagem}
            LiberarJogo = {LiberarJogo}
            palavraEscolhida = {palavraEscolhida}
            corPalavra = {corPalavra}
            palavra = {palavra}
            />
            <Teclado>{Letras}</Teclado>
            <Chute
                ativarTeclado = {ativarTeclado}
                chute = {chute}
                chutarPalavra = {chutarPalavra}
                setChute = {setChute}
            />
        </>
    )
}

const Teclado = styled.div`
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-bottom: 50px;
    button{
        width: 60px;
        height: 60px;
        background-color: rgb(34, 168, 34);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15px;
        margin-top: 15px;
        font-weight: bold;
        font-size: 30px;
        border-radius: 15%;
        border: none;
    }
`