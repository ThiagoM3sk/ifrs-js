//um código mais simpes de JavaScript
function calculaIMC2(){
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')

    peso.style.borderColor = '#ffffff'
    peso.style.backgroundColor = '#ffffff'
    altura.style.borderColor = '#ffffff'
    altura.style.backgroundColor = '#ffffff'

    if(peso.value.length == 0){
        alert('Preencha o peso')
        peso.style.borderColor = 'red'
        peso.style.backgroundColor = '#ffe5e5'
        peso.focus()
        return false
    }

    if(altura.value.length == 0){
        alert('Preencha a altura')
        altura.style.borderColor = 'red'
        altura.style.backgroundColor = '#ffe5e5'
        altura.focus()
        return false
    }
    
    let alturaSoma = Number(altura.value)
    let pesoSoma = Number(peso.value)
    let resultado = pesoSoma/(alturaSoma*alturaSoma)
    alert(`Seu IMC é: ${resultado}`)
    
}