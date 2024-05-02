
 import ApresentacaoNota from "@/public/css/Apresentacao_novo_texto.module.css"
import  Contexto  from '@/Context/contexto';
import React, { useContext } from 'react';



export default function Apresentacao() {
 
const {setIndexNotaAtual, indexNotaAtual, setListaBlocoNotas,   ListaBlocoNotas, setPaginaAtual,   setBlocoNotas} = useContext(Contexto);


function Texto() {



 

     
    setListaBlocoNotas(prevNotas => [
      ...prevNotas,
      {
      titulo: "texto sem titulo",
      texto: ""
     }
    ]);
    

    
    setBlocoNotas(["texto sem titulo", "", ListaBlocoNotas.length])
    setIndexNotaAtual(ListaBlocoNotas.length)
     
  setPaginaAtual("escrever texto") 


  // alert(ListaBlocoNotas[indexNotaAtual].titulo)
    }






return(
<>

<div  className={`${ApresentacaoNota.container_init}`}         >

<img src="imagens/Ellipse 15.svg" alt="" height="250" />
<span    className={`${ApresentacaoNota.span}`}   >O que você desejar escrever hoje?</span>
<button  id="init_chat" onClick={Texto}>Novo texto</button>


</div>

</>
)

}