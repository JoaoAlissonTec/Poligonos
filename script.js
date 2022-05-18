let cont = []
let final = document.querySelector('div#final')
let result = document.querySelector('select#result')

function add(){
    final.innerHTML = ''
    let num = document.querySelector('input#txtn').value
    if(num.length == 0 || num <= 0){
        alert('[ERRO] Digite um número.')
    }else if(num > 100){
        alert('[ERRO] Digite um número válido.')
    }else if(cont.includes(num)) {
        alert('[ERRO] Número já digitado.')
    }else{
        cont.push(num)
        let op = document.createElement('option')
        op.text = `O número ${num} foi adicionado.`
        result.appendChild(op)
    }
    num = document.querySelector('input#txtn').value = ''
    num = document.querySelector('input#txtn').focus()
}
function fim(){
    final.innerHTML = ''
    if(cont == 0){
        alert('[ERRO] Impossivel finalizar.')
    }else{
        let max = cont.map(Number).reduce(function(a, b){
            return Math.max(a, b)
        })
        let min = cont.map(Number).reduce(function(a, b){
            return Math.min(a, b)
        })
        let som = cont.map(Number).reduce(function(a, b){
            return a + b
        })
        let tam = cont.length
        let med = som/tam
        
        final.innerHTML += `<p>O tamanho é de ${tam} números.</p>`
        final.innerHTML += `<p>O maior número é ${max}.</p>`
        final.innerHTML += `<p>O menor número é ${min}.</p>`
        final.innerHTML += `<p>A soma dos número é ${som}.</p>`
        final.innerHTML += `<p>A média dos número é ${med}.</p>`
    }
}