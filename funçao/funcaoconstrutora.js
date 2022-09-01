function carro (velocidadeMaxima = 200, delta=5){
    //atributo privado
    let velocidadeAtual=0

    //metodo publico
    this.acelerar= function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350,30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())