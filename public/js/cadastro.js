"use strict";
botao.addEventListener("click", validarUsuario);
function validarUsuario() {
    const userList = getItemStorage("listaUsuarios", "[]");
    const user = {
        email: email.value,
        senha: senha.value,
    };
    if (!email.value || !senha.value) {
        alert("Campos Vazios");
        return;
    }
    if (senha.value !== senha2.value) {
        alert("senhas não correspondem");
        return;
    }
    verSeExiste();
    salvarUsuario();
}
function verSeExiste() {
    const resultado = listaDeUsuarios.find((usuario) => usuario.email == email.value);
    if (resultado) {
        alert("usuário ja existe");
        return;
    }
}
function salvarUsuario() {
    const usuario = {
        email: email.value,
        senha: senha.value,
        recados: [],
    };
    // lista.adicionar(usuario)
    listaDeUsuarios.push(usuario);
    salvarListaUsuariosNoCache("usuarios", listaDeUsuarios);
}
function salvarListaUsuariosNoCache(key, valor) {
    localStorage.setItem(key, JSON.stringify(valor));
    redirecionarUsuario();
}
function redirecionarUsuario() {
    window.location.href = "entrar.html";
}
