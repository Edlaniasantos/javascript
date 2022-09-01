//object.preventExtensions
const produto = Object.preventExtensions({
    nome:'maria', preco:1.99, tag:'promocao'
})
console.log('Extensivel:',Object.isExtensible(produto))

produto.nome='borracha'
produto.descricao='borracha ecolar branca'
delete produto.tag
console.log(produto)

//object.seal=selado
const pessoa={nome: 'vitoria',idade:23 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome='silva'
delete pessoa.nome
pessoa.idade=12
console.log(pessoa)