const arr = [1, 2, 3, 4, 5, 6]

// const squareArr = arr.map((e, i) => e + i)

// const sum = arr.reduce((total, next) => total + next) // somartodos os itens do array

const average = arr.reduce((total, amount, index, array) => {
    total += amount
    if (index === array.length - 1) {
        return total / array.length
    } else {
        return total
    }
})

// console.log(average);

const cesta = ['banana', 'cereja', 'laranja', 'maçã', 'cereja', 'laranja', 'maçã', 'banana', 'cereja', 'laranja', 'figo']

const contagem = cesta.reduce((conta, fruta) => {
    conta[fruta] = (conta[fruta] || 0) + 1
    return conta
}, {})


console.log(contagem);


const filtro = arr.filter((e) => e % 2 === 0)

console.log(filtro);

const find = cesta.find((e) => e === 'banana')

console.log(find);
