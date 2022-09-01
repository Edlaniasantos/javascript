const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome" : "caderno" , "preco": 13.90}',
    '{"nome" : "kit de lapis", "preco": 41.32}',
]
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)