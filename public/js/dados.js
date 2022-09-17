"use strict";
// defaultValue é usado com valor padrao quando nao tiver dados
function getItemStorage(key, defaultValue) {
    return JSON.parse(localStorage.getItem(key) || defaultValue);
}
function setItemStorage(key, valor) {
    localStorage.setItem(key, JSON.stringify(valor));
}
const listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
const detalhamentoInput = document.getElementById("detalhamento");
const descricaoInput = document.getElementById("descricao");
const botao = document.getElementById("btn-criar");
const btnSair = document.getElementById("sair");
const btnCadastro = document.getElementById("btn-cadastro");
const btnEntrar = document.getElementById("btn-entrar");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");
