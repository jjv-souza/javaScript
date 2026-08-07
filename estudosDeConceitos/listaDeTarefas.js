const formulario = document.getElementById("formulario");
const input = document.getElementById("tarefa");
const lista = document.getElementById("lista");

let criarTarefa = (texto) => {
  //tarefas
  let tarefa = document.createElement("div");
  tarefa.classList.add("tarefa");

  //titulo com texto
  let mensagem = document.createElement("h2");
  mensagem.classList.add("mensagem");
  mensagem.innerText = texto;

  //botao concluir
  let concluir = document.createElement("button");
  concluir.classList.add("concluir");
  concluir.innerText = "Concluir";

  //botao excluir
  let excluir = document.createElement("button");
  excluir.classList.add("excluir");
  excluir.innerText = "Excluir";

  tarefa.appendChild(mensagem);
  tarefa.appendChild(concluir);
  tarefa.appendChild(excluir);

  return tarefa;
};

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("excluir")) {
    e.target.closest(".tarefa").remove();
  } else if (e.target.classList.contains("concluir")) {
    e.target.innerText = "Concluido";
    e.target.closest(".tarefa").querySelector(".mensagem").innerText =
      "Tarefa Concluida";
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let criar = criarTarefa(input.value);
  lista.appendChild(criar);

  input.value = "";
});

console.log("BLA BLA BLA");
