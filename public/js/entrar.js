"use strict";
btnEntrar.addEventListener("click", entrar);
btnCadastro.addEventListener("click", realizarCadastro);
function entrar() {
    if (!email.value || !senha.value) {
        alert("Campos Vazios");
        return;
    }
    const usuario = listaDeUsuarios.find((usuario) => usuario.email === email.value && usuario.senha === senha.value);
    if (!usuario) {
        alert("Usuario invalido ou inexistente");
        realizarCadastro();
        return;
    }
    const usuarioLogado = {
        email: usuario.email,
        recados: usuario.recados,
    };
    localStorage.setItem("UsuarioOn", JSON.stringify(usuarioLogado));
    abrirListaDeRecados();
}
function abrirListaDeRecados() {
    window.location.href = "lista.html";
}
function realizarCadastro() {
    window.location.href = "cadastro.html";
}
