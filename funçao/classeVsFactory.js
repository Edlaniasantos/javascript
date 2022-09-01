class pessoa{
    constructor(nome){
        this.nome=nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1= new pessoa('Maria')
p1.falar()

const pessoa = nome => {
    return {
        falar:() => console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = pessoa('joao')
p2.falar()