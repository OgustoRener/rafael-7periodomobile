# Scroll e listas no React Native (para prova)

Este resumo vem do `03-Scroll.pdf`.

---

## 1) Por que existe scroll no mobile?

Porque a tela tem altura/espaco limitado.
Quando o conteudo passa do limite, voce precisa permitir rolar de forma fluida.

O material cobre quatro pecas principais:

- `ScrollView`
- `FlatList`
- `SectionList`
- `KeyboardAvoidingView` (combinado com `ScrollView` em formularios)

---

## 2) `ScrollView`

### Como ele funciona

- Renderiza conteudo em modo linear.
- Para listas pequenas/moderadas, funciona bem.

### Caracteristicas e trade-offs

- Vantagens:
  - simples de implementar
  - flexivel para personalizacao visual
  - bom para poucos itens
- Desvantagens:
  - nao e otimizado para grandes volumes
  - renderiza tudo de uma vez (pode pesar em memoria/performance)

### Quando usar

- quando a quantidade de itens e limitada
- quando a prioridade e estilizar e nao precisa de virtualizacao

---

## 3) `FlatList` (virtualizacao)

### Ideia central: virtualizacao

- Renderiza apenas itens visiveis na tela (viewport).
- Carrega o resto conforme o usuario rola.

### Caracteristicas

- `data`: array de itens
- `renderItem`: funcao que desenha cada item
- `keyExtractor`: define uma chave unica para cada item

### Vantagens

- alto desempenho e escalabilidade
- economiza memoria
- melhora responsividade em listas longas

### Desvantagens

- exige mais entendimento de configuracao e virtualizacao
- pode ser menos flexivel que `ScrollView` em layouts muito personalizados

### Quando usar

- quando voce espera muitos itens (ex: produtos, mensagens, feeds)

---

## 4) `SectionList`

`SectionList` e uma extensao do `FlatList` com suporte a **secoes** (headers).

### Caracteristicas

- Agrupa itens em secoes com um cabecalho por categoria.
- Virtualiza tambem (como `FlatList`).

### Quando usar

- quando os dados possuem estrutura logica por categoria
- ex: contatos por letra, eventos por data, itens agrupados

---

## 5) Formulario com teclado: `KeyboardAvoidingView`

### Problema

- teclado virtual pode cobrir campos de entrada.

### Solucao

- `KeyboardAvoidingView` ajusta layout automaticamente.
- Quando combinado com `ScrollView`, o usuario consegue rolar a tela para acessar campos mesmo com teclado aberto.

### Caracteristicas

- comportamentos configuraveis (no material, aparece `behavior="padding"`)
- melhora usabilidade em telas pequenas

### Quando usar

- em telas de formulario e inputs, principalmente quando a parte inferior pode ficar coberta

---

## 6) Treino (Gemini): perguntas diretas

1. Compare `ScrollView` vs `FlatList` em performance.
2. O que e `virtualizacao` em `FlatList`?
3. Qual a funcao de `keyExtractor`?
4. Quando faz sentido usar `SectionList` ao inves de `FlatList`?
5. Por que `KeyboardAvoidingView` e importante em formularios mobile?

