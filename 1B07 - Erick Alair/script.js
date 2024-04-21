const inpt = document.querySelector("[input-texto]")
const div = document.querySelector("[txt-contador]")
const btn =  document.querySelector("[btn-contar]")

const contar = (evento) => {

    const inptVal = evento.target.value
    switch (btn.innerText) {
        case "Contar Palavras":    
            let letras = (inptVal.split(''))
            letras = String(letras).replaceAll(',','')
            letras = letras.replaceAll(' ','').length
            div.innerText = letras + 0 + " caracteres"
            break;
    
        case "Contar Caracteres":
            let palavras = (inptVal.split(' '))
            palavras = palavras.length - vazio(palavras)
            div.innerText = palavras + 0 + " palavras"
            break;
    }
    
}

function verify(evento){

    switch (btn.innerText) {
        case "Contar Palavras":
            btn.innerText = "Contar Caracteres"
            break;
    
        case "Contar Caracteres":
            btn.innerText = "Contar Palavras"
            break;
    }
}

function vazio(array){
    let i = 0
    for(const elem of array){
        if (elem == ''){i++}
    }
    return i
}

btn.addEventListener("click", verify)
inpt.addEventListener("input", contar)