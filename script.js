let inputAdultos = document.getElementById("adultos");
let inputKids = document.getElementById("kids");
let inputTime = document.getElementById("time");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let kids = inputKids.value;
  let time = inputTime.value;

  let quantTotalCarne = carnePP(time) * adultos + (carnePP(time) / 2 * kids);
  let quantTotalCerveja = cervejaPP(time) * adultos;
  let quantTotalBebidas = bebidasPP(time) * adultos + (bebidasPP(time) / 2 * kids);

  resultado.innerHTML = `<p>${quantTotalCarne / 1000}Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantTotalCerveja / 355)}Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(quantTotalBebidas / 2000)}Litos de Bebidas</p>`

}

function carnePP(time) {
  if (time >= 6) {
    return 650;
  }else {
    return 400;
  }
}

function cervejaPP(time) {
  if (time >= 6) {
    return 2000;
  }else {
    return 1200;
  }
}

function bebidasPP(time) {
  if (time >= 6) {
    return 1500;
  }else {
    return 1000;
  }
}