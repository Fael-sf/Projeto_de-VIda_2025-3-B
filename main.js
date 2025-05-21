const botoes = document.querySelectorAll(".botao");
console.log(bptoes);

for (let i = 0; i < botoes.length; i++); {
    botoes[i].onclick = function () {


        for (letj = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");

        }

        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
Let tempoAtual = new Date();

contadores[0].textContent =  tempoObjetivo1 - tempoAtual;
