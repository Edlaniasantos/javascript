let aprovados= new Array('bia','carlos','ana')
console.log(aprovados)

aprovados=['bia','carlos','ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]='maria'
aprovados.push('vitoria')
console.log(aprovados.length)

aprovados[9]= 'miguel'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])