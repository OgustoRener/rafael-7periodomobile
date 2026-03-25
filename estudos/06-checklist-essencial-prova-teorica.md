# Checklist essencial (prova teorica)

Use esta pagina como "ultima revisao" antes da prova.

---

## JavaScript

- Diferenca de escopo entre `var`, `let` e `const`.
- Quando usar cada lacoo (`for`, `while`, `do...while`) e o que muda na ordem de execucao.
- Diferenca entre `map`, `filter`, `find`, `every`, `some`, `reduce`.
- Entender `for...of` vs `for...in`.
- Map/Set e as versoes fracas (`WeakMap`, `WeakSet`).

---

## Estilos (React Native)

- `camelCase` e valores numericos como DIP (sem `px`).
- Flexbox: `flexDirection` define eixo principal; `justifyContent` no eixo principal; `alignItems` no eixo cruzado; `alignSelf` sobrescreve item.
- Saber pelo menos as categorias de props: layout, dimensoes, espacamento, tipografia, sombras e posicionamento.
- Diferenca de sombras: iOS usa `shadow*`, Android usa `elevation`.
- Composicao/condicionais de estilo usando arrays.
- Performance: preferir `StyleSheet.create` e evitar inline em listas.
- Acessibilidade: `accessibilityLabel`/`accessibilityRole`/`accessible`.

---

## Scroll e listas

- `ScrollView`: simples, renderiza tudo, bom para listas pequenas.
- `FlatList`: virtualizacao, alto desempenho para listas longas, usa `keyExtractor` e `renderItem`.
- `SectionList`: mesma ideia do `FlatList`, mas com secoes e cabecalho por secao.
- `KeyboardAvoidingView`: necessario em formularios para o teclado nao cobrir inputs; pode ser combinado com `ScrollView`.

---

## Navegacao (React Navigation)

- Drawer: menu lateral, bom para secoes globais.
- Stack: pilha, bom para fluxos sequenciais e hierarquicos com "voltar".
- Bottom Tabs: abas embaixo para secoes principais independentes.
- Passagem de parametros: `navigation.navigate("Tela", { ... })` e leitura em `route.params`.
- Autenticacao condicional: usar estado (ex: `isAuthenticated`) para escolher qual fluxo renderizar.

---

## Modal

- `visible` controla exibir/ocultar.
- `animationType` controla o efeito (`slide`, `fade`, `none`).
- `transparent={true}` para permitir overlay customizado.
- Backdrop: `TouchableOpacity` cobrindo a tela e fechar ao tocar fora do card.
- Modularizacao: mover Modal para componente externo reduz codigo espaguete e separa responsabilidades.

---

## Perguntas rapidas (responda sem olhar)

1. Quando voce escolhe `FlatList` em vez de `ScrollView`?
2. O que `justifyContent` faz em um layout com `flexDirection: "column"`?
3. Como passar dados de uma tela para outra no React Navigation?
4. Por que `KeyboardAvoidingView` melhora formularios?
5. Qual a diferenca pratica entre `slide` e `fade` no Modal?

