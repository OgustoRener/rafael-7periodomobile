# React Native: estilos (guia para prova)

Este resumo vem do `02-aula_react_native_estilos.md` (e do material descrito nos exemplos do seu projeto).

---

## 1) Regras basicas de estilo no React Native

- Estilos sao objetos JavaScript (sem CSS puro).
- Propriedades usam `camelCase` (ex: `backgroundColor`).
- Valores numericos representam **DIP** (nao use `px`).
- Layout primario: **Flexbox**.

---

## 2) Como organizar estilos (boas praticas)

### Inline style

- Funciona para testes e componentes pequenos.
- Evite inline em listas grandes (pode piorar performance por recriar objetos de estilo frequentemente).

### `StyleSheet.create`

- Cria e centraliza estilos.
- Ajuda com reuso e pode reduzir custo em cenarios repetidos.

### Estilos em arquivo externo

- Facilita manutencao e separacao de responsabilidades.

---

## 3) Flexbox: eixo principal x eixo cruzado

No React Native:

- `flexDirection` define o eixo principal (padrao costuma ser `column`).
- `justifyContent` alinha no eixo principal.
- `alignItems` alinha no eixo cruzado.
- `alignSelf` sobrescreve alinhamento para um item especifico.

Exemplo mental:

- Se `flexDirection: "column"`, entao `justifyContent` controla alinhamento vertical.
- `alignItems` controla alinhamento horizontal.

---

## 4) Propriedades mais cobradas (categorias)

### Layout

- `alignContent`, `alignItems`, `alignSelf`
- `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`
- `justifyContent`

### Dimensoes

- `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`

### Espacamento

- `margin` (e variacoes), `padding` (e variacoes)

### Posicionamento

- `position`, `top`, `bottom`, `left`, `right`, `zIndex`

### Bordas

- `borderWidth`, `borderColor`, `borderRadius` (e varacoes)

### Tipografia

- `color`, `fontSize`, `fontStyle`, `fontWeight`, `lineHeight`, `textAlign`, `textDecorationLine`

### Cores e fundo

- `backgroundColor`, `opacity`

### Sombras (cross platform)

- iOS: `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`
- Android: `elevation`

### Outros comuns

- `overflow`
- `resizeMode` (imagens)
- `aspectRatio`
- `transform` (translate/scale/rotate/skew)

---

## 5) Composicao e estilos condicionais

- Composicao: `style={[styles.base, styles.primary, isActive && styles.active]}`
- Ordem importa: o ultimo estilo na lista tem precedencia.

---

## 6) Platform specific e SafeArea

- `Platform.OS === "ios"` (ou `Platform.select`) para adaptar comportamento.
- `SafeAreaView`/`SafeAreaProvider` para respeitar notch, recortes e barra de status.
- `StatusBar` pode ser controlado para ajustar visibilidade/visual.

---

## 7) Responsividade (Dimensions, hook e densidade)

- `Dimensions.get("window")` retorna largura/altura.
- `useWindowDimensions()` atualiza quando orientacao muda.
- `PixelRatio` ajuda quando voce precisa ajustar detalhes em telas de alta densidade.

---

## 8) Theming (arquitetura de estilos)

Ideias comuns:

- arquivo `theme.js` exportando cores/tamanhos
- Context API para alternar temas dinamicamente
- bibliotecas como `styled-components` ou `nativewind` (quando aplicavel)

---

## 9) Acessibilidade e performance

### Acessibilidade

- `accessibilityLabel`, `accessibilityRole`, `accessible` em controles customizados.
- `allowFontScaling` e `numberOfLines` para legibilidade.
- contraste adequado.

### Performance

- prefira `StyleSheet.create` para estilos estaticos
- evite inline em listas/renderizacoes frequentes
- ferramentas: `memo`, `useMemo`, `useCallback`
- reduza complexidade de hierarquia de Views quando possivel

---

## 10) Perguntas para treinar (Gemini)

1. Diferenca entre `justifyContent` e `alignItems`.
2. Quais props usar para sombra em iOS vs Android?
3. Por que evitar inline style dentro de listas?
4. O que significa DIP no React Native?
5. Como voce faria theming com um `theme.js` simples?

