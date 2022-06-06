// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");



let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>Você vai precisar de:</p>`

    resultado.innerHTML += 
    `<div class="resultado-txt"> 
        <img class="icon" src="./assets/meat.png"></img>
        <p>${qdtTotalCarne / 1000} kgs de Carne</p>
    </div>`

    
    resultado.innerHTML +=
    `<div class="resultado-txt">
        <img class="icon" src="./assets/beer.png"></img>
        <p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>
    </div>`

    resultado.innerHTML += 
    `<div class="resultado-txt">
        <img class="icon" src="./assets/soda.png"></img>
        <p>${Math.ceil(qdtTotalBebidas / 1000)} litros de Água/Sucos/refri</p>
    </div>`
}

function carnePP(duracao){

    if (duracao >= 5){
        return 400;
    } else {
        return 150;
    }
}

function cervejaPP(duracao){

    if (duracao >= 6){
        return 2000;
    } else {
        return 600;
    }
}

function bebidasPP(duracao){

    if (duracao >= 5){
        return 240;
    } else {
        return 120;
    }
}