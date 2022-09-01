let pessoa={
    saudaçao:'Bom dia',
    falar() {
        console.log(this.saudaçao)
    }
}
pessoa.falar()

let falar =pessoa.falar
falar()
//conflito entre paradigma funcional e mundo da programaçao orientada a obj

let falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()