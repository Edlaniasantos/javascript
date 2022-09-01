class Lancamento {
    constructor(nome ='Generico', valor=0) {
        this.nome =nome
        this.valor =valor
    }
}
class cicloFinanceiro{
    constructor(mes,ano){
        this.mes=mes
        this.ano=ano
        this.Lancamento=[]
    }

addLancamento(...Lancamento){
    Lancamento.forEach(l => this.Lancamento.push(l))
}

sumario(){
let valorconsolidado=0
this.Lancamento.forEach(l => {
    valorconsolidado += l.valor
})
return valorconsolidado
}
}
const salario= new Lancamento('salario',3400)
const contaDeLuz= new Lancamento('luz',-220)

const contas = new cicloFinanceiro(6,2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())