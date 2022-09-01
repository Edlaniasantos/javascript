const pessoa = {
    nome: 'Larissa',
    idade: 4,
    peso:6
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})
Object.defineProperties(pessoa,'dataNascimento',{
    enurable:true,
    writable: false,
    value:'01/02/2019'
})
pessoa.dataNascimento= '01/02/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
