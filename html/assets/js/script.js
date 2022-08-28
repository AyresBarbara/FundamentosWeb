let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <3){
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = 'red'
 }  else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = 'green'
        nomeOk = true
 }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "Email Válido!"
        txtEmail.style.color = 'green'
        emailOk = true
 }
    }


function validarAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.lenght >= 5){
        txtAssunto.innerHTML = 'Texto muito grande. No maximo 100 caracteres'
        txtAssunto.style.Color = 'red'
    } else{
        txtAssunto.innerHTML = 'Texto Válido!'
        txtAssunto.style.color = 'green'
        assuntoOk = true
 }
    }

function enviar(){
        if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert('Formulário preenchido com sucesso!')
        } else{
            alert ('Preencha o formulário antes de enviar')
        }
    }
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.width = '600px'
}
function mapaNormal(){
    mapa.style.width = '300px'
    mapa.style.width = '250px'
}