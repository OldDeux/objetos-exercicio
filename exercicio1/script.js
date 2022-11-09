//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

const fruta1 = {
    nome: "goiaba",
    preco: 0.70.toFixed(2),
    disponibilidade: true
}

const fruta2 = {
    nome: "manga",
    preco: 2.00.toFixed(2),
    disponibilidade: true
}

const fruta3 = {
    nome: "laranja",
    preco: 0.40.toFixed(2),
    disponibilidade: false
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1)
sacolao.push(fruta2)
sacolao.push(fruta3)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)