"use strict";

var arr = [1, 2, 3, 4, 5, 6]; // const squareArr = arr.map((e, i) => e + i)
// const sum = arr.reduce((total, next) => total + next) // somartodos os itens do array

var average = arr.reduce(function (total, amount, index, array) {
  total += amount;

  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}); // console.log(average);

var cesta = ['banana', 'cereja', 'laranja', 'maçã', 'cereja', 'laranja', 'maçã', 'banana', 'cereja', 'laranja', 'figo'];
var contagem = cesta.reduce(function (conta, fruta) {
  conta[fruta] = (conta[fruta] || 0) + 1;
  return conta;
}, {});
console.log(contagem);
var filtro = arr.filter(function (e) {
  return e % 2 === 0;
});
console.log(filtro);
var find = cesta.find(function (e) {
  return e === 'banana';
});
console.log(find);
