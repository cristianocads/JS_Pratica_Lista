import { criarItemDaLista } from "./criarItemDaLista.js";
import verificarListaVazia from "./verificarListaVazia.js";

const listaTarefas = document.getElementById("tarefas");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaTarefas.appendChild(itemDaLista);
    verificarListaVazia(listaTarefas);
})

verificarListaVazia(listaTarefas);
