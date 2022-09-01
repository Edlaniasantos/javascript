function area (largura,altura) {
    let area = largura * altura
    if(area > 20){
        console.log(`valor acima do permitido:`)
    }{
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4,6))
console.log(area(5,5))