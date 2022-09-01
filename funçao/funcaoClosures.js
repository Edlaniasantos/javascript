let x = 'Global'

function fora(){
    let x = 'local'
    function dentro() {
        return x
    }
    return dentro
}
let minhaFuncao = fora()
console.log(minhaFuncao())