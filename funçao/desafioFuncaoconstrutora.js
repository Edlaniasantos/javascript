function pessoa(nome){
        this.nome=nome
    
    this.falar= function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1= new pessoa('Maria')
p1.falar()
console.log(p1.nome)