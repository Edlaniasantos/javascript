const a = 1
const b = 2
const c = 3

const obj = {a:a, b:b, c:c}
//msm coisa
const obj2 = {a, b, c}
console.log(obj,obj2)

//criar atributo
const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 ={}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 ={[nomeAttr]:valorAttr}
console.log(obj4)

const obj5={
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}
console.log(obj5)