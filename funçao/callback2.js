let notas = [7.7,6.5,5.2,8.9,3.8,7.1,9.0]
//sem callback
let notasBaixas1= []
for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

let notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasbaixas2)