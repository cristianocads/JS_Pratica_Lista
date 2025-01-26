const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaTarefas) {
    const itensDaLista = listaTarefas.querySelectorAll("li");
    if (itensDaLista.lenght === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;