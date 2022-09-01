// colecao dinamica de pares/valor
const produto = new Object
produto.nome = 'cadeira'
produto ['marca do produto'] = 'Generica'
produto.preco= 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo: 'Corolla',
    valor: 90000,
    proprietario: {
        nome: 'Edlania',
        idade:20,
        endereco:{
            rua:'rui barbosa',
            numero: 1234
        }
    },
    condutores:[{
        nome: 'milton',
        idade: 27
    }],
    calcularvalorseguro: function(){

    }
}
carro.proprietario.endereco.condutores = 1000
carro['proprietario'] ['endereco'] ['rua'] = 'Av gigante'
console.log(carro)

//delete.carro.condutores
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularvalorseguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)