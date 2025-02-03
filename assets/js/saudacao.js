function saudacaoComNomeDoUsuario() {
    var usuario = document.getElementById('usuario').value 
    document.getElementById('saudacao').innerText = "Olá, " + usuario + "! Seja bem-vindo(a) ao meu portfólio." 
}
document.getElementById('btnsaudacao').addEventListener('click', saudacaoComNomeDoUsuario) 