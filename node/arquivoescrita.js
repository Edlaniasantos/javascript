const fs = require('fs')

const produto={
    nome:'celular',
    preco: 13.45,
    desconto:0.15
}

fs.writeFile(__dirname + '/arquivogerado.json',JSON.stringify(produto), err=>{
    console.log(err || 'arquivo salvo!')
})