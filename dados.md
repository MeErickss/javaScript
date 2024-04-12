# Tipos de Dados
- ## Objeto
    Como no python os objetos do js são entidades, com seus `atributos`, `propriedades` etc.
    ```javascript
        let newObject = new Object();
        newObject.nome = "Objeto"
        console.log(newObject.nome)// Output Objeto
    ```

- ## Array
    - É o equivalente as listas do python, marcadas com `[]` separando os itens com virgulas.
    ```javascript
        let l1 = [12,3,4,2]
        console.log(l1[0])// Output 12
    ```

- ## Operadores
    O js tem vários tipos de operadores, sendo eles:

    - ### Aritiméticos
        Os operadores aritiméticos são operandos que requerem 2 numeros e retornam somente um valor único, sendo as operações matemáticas básicas, como `+`, `-`, `*`, `/`.
        ```javascript
            console.log(240-60)// Output 180
            console.log(12/4)// Output 3
            console.log(2*7)// Output 14
            console.log(12+12)// Output 24
        ```
    - ### De Comparação
        Operadores de comparação retornam valores baseado na comparação feita. Operadores como `==` ou `!=` realizam comparações estritas e básicas.
        ```javascript
            v = 23
            console.log(v) > 21 // Output true
            console.log(v) >= 21 // Output true
            console.log(v) <= 40 // Output true
        ```
    - ### Lógicos
        Os operadores lógicos, são diretamente associados a valores booleanos, retornando um valor bool, esses são, `AND(&&)`, `OR(||)`, `NOT(!)` com excessão dos operadores  `&&` e `||` que retornam valores de acordo com os operando determinados.
        ```javascript
            var v1 = !true; // Output false
            var v2 = true || false; // Output true
            var v3 = true && true; // Output true
            var v4 = true && false; // Output false
            var v5 = false && true; // Output false
        ```
    - ### typeof
        O `typeof` é um operador que retorna o tipo do valor indicado sendo colocado antes do valor. Esse operando pode ser usado para entender melhor os Tipos Primitivos de dados.
        ```javascript
            typeof "str" // Output string
            typeof 123 // Output number
            typeof true // Output boolean
            typeof indefinido // Output undifined
            typeof Math.sin // Output function
        ```