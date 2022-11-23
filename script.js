let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando....")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePessoa * adultos + (carnePessoa / 2 * criancas);
    let qtdTotalCerveja = cervejaPessoa * adultos;
    let qtdTotalBebida = bebidaPessoa * adultos + (bebidaPessoa / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Lata de cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebida / 1000} L de bebidas</p>`

}
let carnePessoa = carnePorPessoa(duracao);
let cervejaPessoa = cervejaPorPessoa(duracao);
let bebidaPessoa = bebidaPorPessoa(duracao);

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}