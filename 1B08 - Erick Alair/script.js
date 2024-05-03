const tele = document.querySelector("[inpt-tel]")
const btnCopy = document.querySelector("[btn-copia]")
const btnSend = document.querySelector("[btn-envia]")
const divRes = document.querySelector("[div-resultado]")
const inptRes = document.querySelector("[inpt-copia]")
const pronto = document.querySelector("[predefinido]")
const p = document.querySelector("[p]")


const copia = (evento) => {
    try{
        inptRes.value = "https://wa.me/" + teleCampo
        divRes.style = "display: block;"
    } catch (error){
        alert("Valores Inválidos!")
        console.log(error)
    }
}

const envia = (evento) => {
    try{
        window.open("https://wa.me/" + teleCampo)
    } catch(error){
        alert("Valores Inválidos!")
        console.log(error)
    }
}

const txtcopia = (evento) => {
    navigator.clipboard.writeText(inptRes.value)
    p.innerText = "Link Copiado!"
}

const campos = (evento) => {
    tele.value = tele.value.replace(/\D/g, "")
    if(tele.value.length == 11){
        pronto.style = "display: none;"
        teleCampo = tele.value
        tele.value = tele.value.replace(/(\d{2})(\d)/, "($1) $2")
        tele.value = tele.value.replace(/(\d)(\d{4})$/,"$1-$2")
        
    }
}

const adicionar = (evento) => {
    tele.value = "44912341234"
    teleCampo = tele.value
    tele.value = tele.value.replace(/(\d{2})(\d)/, "($1) $2")
    tele.value = tele.value.replace(/(\d)(\d{4})$/,"$1-$2")
    pronto.style = "display: none;"
}

tele.addEventListener("input", campos)
btnCopy.addEventListener("click", copia)
btnSend.addEventListener("click", envia)
inptRes.addEventListener("click", txtcopia)
pronto.addEventListener("click", adicionar)