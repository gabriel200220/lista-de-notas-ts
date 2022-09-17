"use strict";
btnSair.addEventListener("click", () => {
    atualizarRecados();
    localStorage.removeItem("UsuarioOn");
    sair();
});
let usuarioON = getItemStorage("UsuarioOn");
if (!usuarioON) {
    sair();
}
function criarRecado() {
    if (!detalhamentoInput.value || !descricaoInput.value) {
        alert("ops, preencha todos os campos.");
        return;
    }
    const recado = {
        id: idGenerator(),
        detalhamento: detalhamentoInput.value,
        descricao: descricaoInput.value,
    };
    usuarioON.recados.push(recado);
    setItemStorage("UsuarioOn", usuarioON);
    imprimirRecados();
}
const idGenerator = () => {
    const time = new Date().getTime();
    const id = Math.floor((1 + Math.random()) * time)
        .toString(16)
        .substring(1);
    return id + id;
};
function imprimirRecados() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let i in usuarioON.recados) {
        console.log("recados recarregados");
        let indice = Number(i) + 1;
        let tr = document.createElement("tr");
        let td_id = document.createElement("th");
        td_id.innerText = `${indice}`;
        td_id.classList.add("center");
        let td_detalhamento = document.createElement("td");
        td_detalhamento.innerHTML = usuarioON.recados[i].detalhamento;
        let td_descricao = document.createElement("td");
        td_descricao.innerHTML = usuarioON.recados[i].descricao;
        let td_acao = document.createElement("td");
        let imgEdit = document.createElement("img");
        imgEdit.src = "caneta.png";
        imgEdit.onclick = () => editarRecado(usuarioON.recados[i].id);
        let imgDelete = document.createElement("img");
        imgDelete.src = "prancheta.png";
        imgDelete.onclick = () => deletarRecado(usuarioON.recados[i].id);
        td_acao.appendChild(imgEdit);
        td_acao.appendChild(imgDelete);
        tr.appendChild(td_id);
        tr.appendChild(td_detalhamento);
        tr.appendChild(td_descricao);
        tr.appendChild(td_acao);
        tbody.appendChild(tr);
    }
}
function editarRecado(index) {
    const capturaRecado = usuarioON.recados.findIndex((recado) => recado.id == index);
    if (capturaRecado < 0) {
        return alert("Recado não encontrado");
    }
    detalhamentoInput.value = usuarioON.recados[capturaRecado].detalhamento;
    descricaoInput.value = usuarioON.recados[capturaRecado].descricao;
    let btnEditar = document.getElementById("btn1");
    btnEditar.innerHTML = "Atualizar";
    btnEditar.onclick = () => modificaRecado(btnEditar, capturaRecado);
    console.log("botaoSalvarAntes", btnEditar);
}
function modificaRecado(btn, index) {
    usuarioON.recados[index].detalhamento = detalhamentoInput.value;
    usuarioON.recados[index].descricao = descricaoInput.value;
    setItemStorage("UsuarioOn", usuarioON);
    imprimirRecados();
    setTimeout(() => {
        btn.innerHTML = "Salvar";
        btn.onclick = () => criarRecado();
        console.log("botaoSalvar");
    }, 6000);
}
function deletarRecado(index) {
    const confirmeRecado = confirm("Tem certeza que deseja apagar?");
    if (!confirmeRecado) {
        return console.log("não apagou ", index);
    }
    const deletarRecados = usuarioON.recados.filter((recado) => recado.id !== index);
    usuarioON.recados = deletarRecados;
    setItemStorage("UsuarioOn", usuarioON);
    imprimirRecados();
}
function getItemStorage(key) {
    return JSON.parse(localStorage.getItem(key) || "");
}
function setItemStorage(key, valor) {
    localStorage.setItem(key, JSON.stringify(valor));
}
function atualizarRecados() {
    const usuarios = getItemStorage("usuarios");
    usuarios.forEach((usuario) => {
        if (usuario.email === usuarioON.email) {
            usuario.recados = usuarioON.recados;
        }
    });
    setItemStorage("usuarios", usuarios);
}
function sair() {
    window.location.href = "entrar.html";
}
imprimirRecados();