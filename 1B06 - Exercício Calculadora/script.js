/**********************
 * Seleção dos elementos HTML
 **********************/
// Botões
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento, // DIV buffer
  displayTextoElemento: displayElemento, // DIV display
};

/**********************
 * Associar funções aos eventos dos elementos HTML
 **********************/

// Botão AC
btnAC.addEventListener("click", () => {
    limpaVariaveis(calculadora);
});

// Botão Delete
btnDelete.addEventListener("click", () => {
    apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
    executaCalculo(calculadora);
});

// Botões de Numeros
for (let i = 0; i < btnBotoes.length; i++){
    btnBotoes[i].addEventListener("click", () => {
        adicionaNumero(calculadora, btnBotoes[i].innerText);
    });
}

for (let o = 0; o < btnOperacoes.length; o++){
        btnOperacoes[o].addEventListener("click", () => {
        escolheOperador(calculadora, btnOperacoes[o].innerText);
    })}

    
function limpaVariaveis(calculadora) {
    calculadora.operandoAtual = ""
    calculadora.operador = ""
    calculadora.operandoAnterior = ""
    calculadora.bufferTextoElemento.innerText = ""
    calculadora.displayTextoElemento.innerText = ""
}

function adicionaNumero(calculadora, numero) {
    calculadora.operandoAtual = numero
    calculadora.displayTextoElemento.innerText += calculadora.operandoAtual
}

function escolheOperador(calculadora, operador){
    if (calculadora.bufferTextoElemento.innerText != "" && calculadora.displayTextoElemento.innerText != ""){
        calculadora.operador = operador
        executaCalculo(calculadora)
        calculadora.operandoAnterior = calculadora.operandoAtual
        calculadora.bufferTextoElemento.innerText = calculadora.displayTextoElemento.innerText + calculadora.operador
        calculadora.displayTextoElemento.innerText = ""
    } else {
        if(calculadora.operador == ""){        
            calculadora.operador = operador
            calculadora.operandoAnterior = (calculadora.displayTextoElemento.innerText)
            calculadora.bufferTextoElemento.innerText += calculadora.operandoAnterior + calculadora.operador
            calculadora.displayTextoElemento.innerText = ""
        } else {
            calculadora.bufferTextoElemento.innerText = calculadora.bufferTextoElemento.innerText.replace(calculadora.operador, operador)
            calculadora.operador = operador
        }
    }
}

function executaCalculo(calculadora) {
    if (calculadora.operandoAnterior != "" && calculadora.operador != "" && calculadora.operandoAtual != ""){
        calculadora.bufferTextoElemento.innerText = Number(calculadora.operandoAnterior) + (calculadora.operador) + Number(calculadora.displayTextoElemento.innerText)
        if (calculadora.operador == "÷"){
            calculadora.displayTextoElemento.innerText = eval((calculadora.operandoAnterior)  + "/" + (calculadora.displayTextoElemento.innerText))
        } else{
            console.log(calculadora.operandoAnterior,calculadora.operador,calculadora.operandoAtual)
            calculadora.displayTextoElemento.innerText = eval((calculadora.operandoAnterior) + (calculadora.operador) + (calculadora.displayTextoElemento.innerText))
        }
        calculadora.operandoAtual = calculadora.displayTextoElemento.innerText
        calculadora.operandoAnterior = ""
    }
}

function apagaDigito(calculadora){
    calculadora.displayTextoElemento.innerText = calculadora.displayTextoElemento.innerText.slice(0,((calculadora.displayTextoElemento.innerText).length)-1)
}