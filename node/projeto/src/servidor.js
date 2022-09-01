const porta= 3003

const express= require('express')
const app = express()
const bodyParser= require('body-parser')
const bancoDedados= require('./bancoDedados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDedados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDedados.getProduto(req.params.id))
})

app.post('produtos',(req, res, next) => {
const produto= bancoDedados.salvarProduto({
    nome: req._readbody.nome,
    preco:req.body.preco
})
res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`servidor esta executando na porta ${porta}.`)
})