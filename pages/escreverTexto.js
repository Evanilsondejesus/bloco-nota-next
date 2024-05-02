

import Escrever from "@/public/css/Escrever.module.css"
import  Contexto  from '@/Context/contexto';
import React, { useContext, useState, useRef, useEffect} from 'react';



export default function EscreverTexto() {
const {indexNotaAtual, ListaBlocoNotas, setListaBlocoNotas, editarConteudo, setEditarConteudo, setPaginaAtual } = useContext(Contexto);
 



if (ListaBlocoNotas === undefined) {
  return
 }

const [tituloTexto, setTituloTexto ] = useState(ListaBlocoNotas[indexNotaAtual].titulo)
const [texto, setTexto] = useState(ListaBlocoNotas[indexNotaAtual].texto)
 
 
 function Salva() {
const novaLista = [...ListaBlocoNotas];
novaLista[indexNotaAtual] = {titulo: tituloTexto, texto: texto}
setListaBlocoNotas(novaLista)
 
 }


 
function Editar() {
  setEditarConteudo(true)
}



function Remover() {
const novoArray = ListaBlocoNotas.filter((_, index) => index !== indexNotaAtual);
setListaBlocoNotas(novoArray);
setPaginaAtual("nova nota")



}

function Compartilhar(params) {
  if (navigator.share) {
    navigator.share({
      title: "olá",
      text: "aqui",
      url: 'WWW.google.com'
    })
      .then(() => console.log('Conteúdo compartilhado com sucesso.'))
      .catch((error) => console.log('Erro ao compartilhar:', error));
  } else {
    console.log('API de compartilhamento não suportada.');
  }


}
 


return(


<div id="container_conteudo"  onMouseLeave={Salva} onDoubleClick={Editar}>







 {!editarConteudo ? (
<h1  className={`${Escrever.h1}`}>{tituloTexto}</h1>
) : (

<input  placeholder="digite titulo" value={tituloTexto}  className={`${Escrever.input_titulo}`} 
 onChange={(event)=>{ setTituloTexto(event.target.value) }
}     />  


 )} 



<textarea   className={`${Escrever.textarea}`}  readOnly={!(editarConteudo)}    id="editor_texto" rows="2" 
 value={texto != null ? texto: ""}   placeholder={texto == "" ? "digite alguma coisa" : ""}  onChange={(event)=> setTexto(event.target.value)} >

</textarea>
  


{!(editarConteudo) && (
  <div className={`${Escrever.container_acao_txt}`}  id="container_acao_txt">
  
  <button onClick={Compartilhar}>
<img src="imagens/share.svg" alt="" id="compartilhar"/>
</button>

<button  onClick={Remover}>
<img src="imagens/trash3.svg" alt="apagar nota"  id="apagar_nota" />
 </button>


  </div>
)}

{editarConteudo && (
<div className={`${Escrever.container_acao_txt}`}  id="container_acao_txt">
    

   


 
  </div>
)}


</div>

)

}