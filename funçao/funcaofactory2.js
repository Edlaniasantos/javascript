function criarProduto(nome,preco,){
    return{
        nome, 
        preco,
        desconto: 0.1
        
    }
}
console.log(criarProduto('Shampo',290,21))
console.log(criarProduto('Creme', 78,98))