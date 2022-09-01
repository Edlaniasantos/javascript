//cadeia de prototipos (prototype chain)
Object.prototype.attr0 ='0'
const avo={Attr1: 'a'}
const pai ={__proto__:avo,att2:'b',att3:'3'}
const filho= {__proto__:pai,att3:'c'}
console.log(filho.att0, filho.Attr1, filho.att2,filho.attr3)

const carro ={
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual= this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}
const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing
}
const volvo ={
    modelo:'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())