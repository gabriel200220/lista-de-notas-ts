"use strict";
const listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
const detalhamentoInput = document.getElementById("detalhamento");
const descricaoInput = document.getElementById("descricao");
const botao = document.getElementById("btn-criar");
const btnSair = document.getElementById("sair");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");
