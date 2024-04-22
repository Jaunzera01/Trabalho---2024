const botoes = document.querySelectorAll('.objetivo');
//botoes.length

let i = 0;
for(let i = 0; i < botoes.length; i++ ){
console.log(i);
botoes[i].onlinck = function(){
 botoes[i].classList.add('ativo');

}

 // botoes[i].classList.remove('ativo);
}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date ('2024-04-17T00:00:00');

let TempoAtual = new Date ();
let tempoFinal = tempoObjetivo1 - TempoAtual;
let segundos = Math.floor( tempoFinal/1000);]
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

contadores[0].textContent = dias + " dias " + horas + " horas " + " minutos " + " minutos " + "segumdos " + " segundos ";
