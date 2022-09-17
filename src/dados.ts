const listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]") as Usuario[];

const detalhamentoInput = document.getElementById("detalhamento") as HTMLInputElement;
const descricaoInput = document.getElementById("descricao") as HTMLInputElement;

const botao = document.getElementById("btn-criar") as HTMLInputElement;
const btnSair = document.getElementById("sair") as HTMLButtonElement;

const email = document.getElementById("email") as HTMLInputElement;
const senha = document.getElementById("senha") as HTMLInputElement;
const senha2 = document.getElementById("senha2") as HTMLInputElement;

interface Usuario {
  email: string;
  senha: string;
  recados?: Recado[];
}

interface Recado {
  detalhamento: string;
  descricao: string;
  id: string;
}