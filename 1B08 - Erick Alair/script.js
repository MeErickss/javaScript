const tele = document.querySelector("[inpt-tel]")
const btnCopy = document.querySelector("[btn-copia]")
const btnSend = document.querySelector("[btn-envia]")
const divRes = document.querySelector("[div-resultado]")
const inptRes = document.querySelector("[inpt-copia]")
const pronto = document.querySelector("[predefinido]")
const p = document.querySelector("[p]")

tele.addEventListener("input", function(){
    pronto.style = "display: none;"
    teleCampo = tele.value
    tele.value = tele.value.replace(/^(\d{2})(\d)/g, '($1) $2')
    tele.value = tele.value.replace(/(\d{5})(\d)/,'$1-$2')
})

tele.addEventListener("input", function(){
    let tamanho = tele.value.length === 15
    tele.value = tele.value.replace(/\D/g, "")
    tele.style = tamanho ? "border-color:green;color:green;" : "border-color:red;color:red;" 
})

tele.addEventListener("click", function(){
    divRes.style.display = "none"
})

tele.addEventListener("input", function(){
    pronto.style = "display: none;"
    teleCampo = tele.value
    tele.value = tele.value.replace(/^(\d{2})(\d)/g, '($1) $2')
    tele.value = tele.value.replace(/(\d{5})(\d)/,'$1-$2')
})

btnCopy.addEventListener("click", function(){
    switch (tele.value.length) {
        case 15:
            inptRes.value = "https://wa.me/55" + teleCampo
            divRes.style = "display: block;"
            break;
        default:
            alert("Valores Inválidos!")
            console.log(error)
            break;
    }
})

btnSend.addEventListener("click", function(){
    switch (tele.value.length) {
        case 15:
            window.open("https://wa.me/55" + teleCampo)
            break
        default:
            alert("Valores Inválidos!")
            console.log(error)
            break
    }
})

inptRes.addEventListener("click", function(){
    navigator.clipboard.writeText(inptRes.value)
    p.innerText = "Link Copiado!"
    setTimeout(() => {
        p.innerText = "Clique no link para copiar"
    }, 4000)
})

pronto.addEventListener("click", function(){
    tele.value = "44912341234"
    teleCampo = tele.value
    tele.value = tele.value.replace(/(\d{2})(\d)/, "($1) $2")
    tele.value = tele.value.replace(/(\d)(\d{4})$/,"$1-$2")
    tele.style = "border-color:green;color:green;"
    pronto.style = "display: none;"
})