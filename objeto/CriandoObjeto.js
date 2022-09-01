//usando a notaçao literal
const obj1= {}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 =new Object
console.log(obj2)

//funcao construtora
function produto(nome, preco,desc){
    this.nome= nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new produto('Geladeira', 7899, 0.15)
const p2 = new produto('Fogao',900,0.25)
console.log(p1.getPrecoComDesconto()),(p2.getPrecoComDesconto())