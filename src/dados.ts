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

// defaultValue é usado com valor padrao quando nao tiver dados
function getItemStorage(key: string, defaultValue: string) {
  return JSON.parse(localStorage.getItem(key) || defaultValue);
}

function setItemStorage(key: string, valor: Recado[] | Usuario[]) {
  localStorage.setItem(key, JSON.stringify(valor));
}

const listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]") as Usuario[];

const detalhamentoInput = document.getElementById("detalhamento") as HTMLInputElement;
const descricaoInput = document.getElementById("descricao") as HTMLInputElement;

const botao = document.getElementById("btn-criar") as HTMLButtonElement;
const btnSair = document.getElementById("sair") as HTMLButtonElement;

const btnCadastro = document.getElementById("btn-cadastro") as HTMLButtonElement;
const btnEntrar = document.getElementById("btn-entrar") as HTMLButtonElement;

const email = document.getElementById("email") as HTMLInputElement;
const senha = document.getElementById("senha") as HTMLInputElement;
const senha2 = document.getElementById("senha2") as HTMLInputElement;
