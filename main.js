alert('Olá, seja bem vindo!');

let nomeUsuario = prompt('Qual o seu nome?');

let Texto = document.querySelector('span');

Texto.textContent = nomeUsuario;

while (nomeUsuario == 'span'){
    nomeUsuario = prompt('Qual o seu nome?');
}