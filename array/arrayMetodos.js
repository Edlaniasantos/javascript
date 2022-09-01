const pilotos=['vinicios','marcos', 'murilo']
pilotos.pop()//remove o ultimo elemento

pilotos.push('milton')
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('hamilton')// adiciona no primeiro elemento
console.log(pilotos)

//splice: pode adcionar e remover elementos

//adicionar:
pilotos.splice(2,0, 'edlania','maria')
console.log(pilotos)

//remover:
pilotos.splice(0,2)
console.log(pilotos)

const algunsPilotos1= pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2=pilotos.slice(1,2)
console.log(algunsPilotos2)