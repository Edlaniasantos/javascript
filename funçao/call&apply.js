function getPreco(imposto= 0, moeda ='R$'){
    return `${moeda} ${this.preco * (1-this.desc)* (1 + imposto)}`
}
const produto = {
    nome: 'Macarrão',
    preco:2950,
    desc: 0.15,
    getPreco
}
global.preco=20
global.desc= 0.1
console.log (getPreco())
console.log(produto.getPreco())