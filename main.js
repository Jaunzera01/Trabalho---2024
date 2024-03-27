alert('Olá, seja bem vindo!');

let nomeUsuario = prompt('Qual o seu nome?');

let Texto = document.querySelector('span');

while (nomeUsuario == ''){
    nomeUsuario = prompt('Qual o seu nome?');
}

Texto.textContent = nomeUsuario;