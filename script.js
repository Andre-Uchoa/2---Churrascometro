let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

console.log(inputAdultos,inputCriancas,inputDuracao);


let resultado = document.getElementById("resultado");

function calcular(){

    console.log("Calculando")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value; 
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * 0.5 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) * 0.5 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja/1000} l de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas/1000} l de Bebidas</p>`


    
}

function carnePP(duracao) {
    if (duracao >= 6){
        return 650;
     
    } else{
        return 400;

    }
    
}

function cervejaPP(duracao) {
    if (duracao >= 6){
        return 2000;
     
    } else{
        return 1200;
        
    }
}
    

    function bebidasPP(duracao) {
        if (duracao >= 6){
            return 1500;
         
        } else{
            return 1000;
            
        }
}
