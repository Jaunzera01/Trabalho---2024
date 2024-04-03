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
