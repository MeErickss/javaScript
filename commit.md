# Escopo
    - Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

- ## Global 
    - Variável global Variável definida fora de uma função. As variáveis globais podem ser acessadas de qualquer função.

- ## Bloco
    - Estruturas como if, for e while são blocos de escopo, com váriaveis que atingem somente ao escopo especifico das mesmas
    
    ```javascript
        function f () {
            var name = 'Lucas'

            if (name) {
              // Escopo diferente da funcao f
              var age = 23
            }
        }
    ```

- ## Função
    - Assim como o escopo de bloco, se trata de variáveis dentro de funções, que só podem ser chamadas se forem declaradas dentro desse escopo

    ```javascript 
        function nome (a) {
            var name = 'Lucas'
    
            function idade () {
                var age = 23
                console.log(name) // Lucas
                console.log(age) // 23
            }
    
        console.log(name) // Lucas
        console.log(age) // Não consegue chamar a var age
    }
    ```


# Declaração de Variáveis

- ## Hoisting
    O Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo do seu escopo antes da execução do código, não importa se o escopo seja global ou local.

- ## Var
    O var é um tipo de variavel obsoleto, apenas o usamos para sites antigos e têm escopo de função ou escopo global, que significa que são visíveis dentro da função em que foram declaradas ou em todo o programa, se forem declaradas fora de qualquer função.

    ```javascript        
    var myvar = "um valor";

        (function () {
          var myvar;
          console.log(myvar); // undefined
        })();
    ```


- ## Let
    O let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Sendo o inverso do var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

    ```javascript 
            if (x) {
      let foo;
      let foo; // Emite um TypeError.
    }

    function do_something() {
      let foo;
      let foo; // Isso funciona.
    }
    ```


- ## Const
    O const descreve valores fixos, que não são alteráveis como objetos ou arrays. Não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

    ```javascript
    const number = 42;

    try {
      number = 99;
    } catch (err) {
      console.log(err);
      // Output: TypeError: invalid assignment to const 'number'
    }
    
    console.log(number); // Output: 42
    ```

# Tipos de Dados Primitivos
- ## boolean
    O tipo de dados bool corresponde aos tipos de valores mais primitivos, True ou False (1 ou 0), ele pode ser usado para verificações simples, ou condições
    
    ```javascript
        let bool = true
        while (bool){
            console.log("O while é igual a True")
        }
    ```
    


- ## number
    Como a tradução diz, corresponde ao grupo real dos números
    
    ```javascript 
        255;
        255.0; // Mesmo Número
        255 === 255.0; // true
        255 === 0xff; // true (Hexadecimal)
        255 === 0b11111111; // true (Binário)
    ```
    

- ## string
    É uma cadeia de caracteres
    
    ```javascript 
        let str = "Isso é uma cadeia de caracteres"
        let strn = "1sso tamb3m 3 um4 c4d3i4 d3 c4r4ct3r3s"
    ```

- ## undefined
    Representa um valor indefinido. Uma variável que não teve um valor atribuído é do tipo undefined. Uma função retorna undefined se um valor não for retornado.
    
    ```javascript
        var x;
        if (x === undefined) {
          // será executado
        } else {
          // não é executado
        }
    ```


- ## null
    Como diz a tradução é um valor nulo
    ```javascript
        let nulo = null
        console.log(nulo * 12)// Output 0
    ```
    