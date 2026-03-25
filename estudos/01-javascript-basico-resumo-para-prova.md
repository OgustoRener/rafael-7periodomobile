# JavaScript basico (revisao para prova)

Este resumo vem do conteudo do `01-aula-JavaScript.pdf`.

---

## 1) Variaveis: `var`, `let` e `const`

### `var`

- Escopo mais amplo (funcao/global).
- Pode ser reatribuida (e pode ser "redefinida" dependendo do escopo).
- No exemplo classico, redefinicao dentro de um bloco pode afetar o valor fora do bloco.

### `let`

- Escopo de bloco.
- A reatribuicao vale apenas dentro do bloco onde foi declarada.

### `const`

- Escopo de bloco.
- Valor nao pode ser reatribuido.
- Atenuao: `const` impede reatribuicao da variavel, mas se o valor for um objeto, as propriedades podem ser modificadas.

---

## 2) Lacos de repeticao

### `for`

Estrutura com contador/condicao.

### `while`

Testa a condicao antes de executar.

### `do...while`

Executa pelo menos uma vez, porque testa depois.

---

## 3) Funcoes

### Declaracao de funcao

`function saudacao(nome) { ... }`

### Funcao anonima (expressao)

`const soma = function(a, b) { return a + b }`

### Arrow function (funcao de seta)

`const multiplicacao = (a, b) => a * b`

Ideia chave: arrow functions sao muito usadas em callbacks (ex: `map`, `filter`, `reduce`).

---

## 4) Objetos e `this`

Objetos podem ter:

- propriedades (ex: `nome`, `idade`)
- metodos (ex: `saudar`)

Dentro de um metodo, `this` aponta para o proprio objeto que chamou o metodo.

---

## 5) Classes (ES6)

Classe `Animal` exemplo:

- `constructor(nome, tipo)` para inicializar
- metodo `exibirInformacoes()` usando `this.nome` e `this.tipo`

Instanciacao: `new Animal("Rex", "cachorro")`

---

## 6) Metodos comuns de Arrays

Assuma que voce quer trabalhar com colecoes:

- `forEach`: executa para cada elemento (sem retornar um novo array)
- `map`: cria um novo array transformando cada item
- `filter`: cria um novo array com itens que passam no teste (predicado)
- `find`: retorna o primeiro item que satisfaz a condicao (ou `undefined`)
- `every`: retorna `true` se todos passam no teste
- `some`: retorna `true` se pelo menos um passa no teste
- `reduce`: "reduz" array a um unico valor (somatorio, acumuladores, etc)

---

## 7) Iteracao: `for...of` vs `for...in`

- `for...of`: itera sobre valores (ex: valores de um array)
- `for...in`: itera sobre chaves/propriedades enumeraveis de um objeto

---

## 8) Estruturas: Map/WeakMap e Set/WeakSet

### `Map`

- Colecao de pares chave-valor.
- Chaves podem ser de qualquer tipo.

### `WeakMap`

- Parecido com `Map`, mas chaves devem ser objetos.
- As chaves sao referencia fraca: podem ser coletadas pelo garbage collector quando nao existirem mais referencias.

### `Set`

- Colecao de valores unicos.

### `WeakSet`

- Como `Set`, mas contem apenas objetos e usa referencia fraca.

---

## 9) Para treinar (perguntas que geralmente caem)

1. Diferenca de escopo entre `var`, `let` e `const` em blocos.
2. Quando usar `map` vs `filter`.
3. O que retorna `find` vs `filter`.
4. Por que `for...of` e mais natural para iterar arrays.
5. O que torna `WeakMap` diferente de `Map`.

