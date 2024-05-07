const baconx = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < baconx.length; i++) {

    baconx[i].onclick = function () {

        for (let j = 0; j < baconx.length; j++) {

            baconx[j].classList.remove('ativo');

            textos[j].classList.remove('ativa');

        }

        baconx[i].classList.add('ativo');
        textos[i].classList.add('ativa');

    }
}
    const contadores = document.querySelectorAll(".contador");
    const tempoobjetivo1 = new Date('2024-04-30T00:00:00');
    const tempoobjetivo2 = new Date('2024-05-30T00:00:00');
    const tempoobjetivo4 = new Date('2024-06-30T00:00:00');
    const tempoobjetivo4 = new Date('2024-12-30T00:00:00');



    let tempos = [tempoObjetivol, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = CalculaTempo(tempos[i]);

    }



    function CalculaTempo(tempoObjetivo) {


        let Tempoatual = new Date();
        let tempoFinal = tempoobjetivo + Tempoatual;
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let hora = Math.floor(minutos / 60);
        let dias = Math.floor(hora / 24);

        segundos %= 60;
        minutos %= 60;
        hora %= 24;

        return dias + "DiAS";

    }


