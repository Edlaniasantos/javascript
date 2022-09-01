const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota:9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
 ]
 //DESAFIO 1: todos alunos sao bolsista?
 const todosBolsistas =(resultado,bolsista) => resultado && bolsista
 console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

 //DESAFIO 2: algum aluno é bolsista

 const algumBolsista = (restultado , bolsista)=> restultado || bolsista
 console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))