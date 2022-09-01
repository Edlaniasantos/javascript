let valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}
function exec(){
    let valor= 'local'
    minhaFuncao()
}
exec()