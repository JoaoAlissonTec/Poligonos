function verificar(){
    let lado = document.querySelector('input#txtl').value
    let result = document.querySelector('div#result')
    result.innerHTML = ''
    if(lado.length == 0){
        alert('[ERRO] Digite o número de lados.')
    }else{
        let img = document.createElement('img')
        let div = document.createElement('div')
        div.setAttribute('id', 'result2')
        if(lado == 3){
            img.setAttribute('src', 'triangulo.png')
            let input1 = document.createElement('input')
            input1.setAttribute('id', 'altura')
            input1.type = 'number'
            let input2 = document.createElement('input')
            input2.setAttribute('id', 'base')
            input2.type = 'number'
            let button = document.createElement('input')
            button.setAttribute('id', 'button')
            button.type = 'button'
            button.value = 'Calcular'
            button.onclick = function clicar(){
                let result2 = document.querySelector('div#result2')
                let altura = document.querySelector('input#altura').value
                let base = document.querySelector('input#base').value
                if(base.length == 0 || altura.length == 0){
                    alert('[ERRO] Digite as informações.')
                }else{
                    let total = (altura * base)/2
                    result2.innerHTML = ''
                    result2.innerHTML += 'A área do triângulo é: (b*h)/2'
                    result2.innerHTML += `<br>Área = ${total}`
                }
            }
            result.appendChild(img)
            result.innerHTML += '<br>Altura: '
            result.appendChild(input1)
            result.innerHTML += ' Base: '
            result.appendChild(input2)
            result.innerHTML += '<br>'
            result.appendChild(div)
            result.appendChild(button)
        } else if(lado == 4){
            img.setAttribute('src', 'quadrado.png')
            let input = document.createElement('input')
            input.setAttribute('id', 'lado')
            let button = document.createElement('input')
            button.setAttribute('id', 'button')
            button.type = 'button'
            button.value = 'Calcular'
            button.onclick = function click(){
                let result2 = document.querySelector('div#result2')
                let lado = document.querySelector('input#lado').value
                if(lado.length == 0){
                    alert('[ERRO] Informe o lado.')
                }else{
                    let total = lado * lado
                    result2.innerHTML = ''
                    result2.innerHTML += 'A área do quadrado é: L^2'
                    result2.innerHTML += `<br>Área = ${total}`
                }
            }
            result.appendChild(img)
            result.innerHTML += '<br>Lado: '
            result.appendChild(input)
            result.innerHTML += '<br>'
            result.appendChild(div)
            result.appendChild(button)
        } else{
            alert('[ERRO] Por favor, digite um número válido.')
        }

    }
}