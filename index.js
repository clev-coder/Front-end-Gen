let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "nome Invalido"
        txtNome.style.color = "red"
    }else {
        txtNome.innerHTML = "nome Valido"
        txtNome.style.color = "green"
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto e muito grande, digite no maximo 100 caracteres'
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
    }else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOK == true && emailOk == true && assuntoOk == true) {
        alert ('Formulario enviado com sucesso!')
    }else {
        alert ('Preencha o formulario corretamente antes de enviar...')
    }
}

function mapaZoom () {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal () {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}