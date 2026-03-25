# Navegacao mobile (React Navigation) para prova

Este resumo vem do `04-Navegacao.pdf`.

---

## 1) Visao geral: por que navega?

Navegacao define como o usuario troca de telas.
Em apps maiores, e comum combinar tipos diferentes para resolver diferentes necessidades de interface.

---

## 2) Drawer navigation (gaveta)

### Como e a estrutura

- Menu lateral que desliza para fora da borda.
- Usa `Drawer.Navigator` e telas `Drawer.Screen`.

### Quando usar

- Quando voce tem varias funcionalidades (opcoes) que nao precisam ser acessadas o tempo todo.
- Bom para menu global: perfil, configuracoes, etc.

### Vantagens

- interface mais limpa (menos coisas na tela principal)

### Desvantagens

- pode esconder funcionalidades importantes
- descoberta pode ser pior se o usuario nao estiver habituado

---

## 3) Stack navigation (pilha)

### Como funciona

- Telas empilhadas: uma nova tela aparece sobre a anterior.
- Fluxo similar a uma jornada linear com historico natural (voltar).

### Quando usar

- Fluxos sequenciais/hierarquicos:
  - login
  - cadastros
  - detalhes de item (voltar para a lista)

### Vantagens

- facilita voltar para a tela anterior
- transicoes animadas fazem sentido

### Desvantagens

- pode nao ser ideal para navegacoes paralelas ou secoes independentes

---

## 4) Bottom Tabs (abas embaixo)

### Como e a estrutura

- Barra de abas na parte inferior.
- Cada aba representa uma secao principal do app.
- Usa `createBottomTabNavigator`.
- No material aparece uso de `tabBarIcon` com `Ionicons` do `@expo/vector-icons`.

### Quando usar

- Quando voce tem secoes principais e relativamente independentes:
  - feed
  - mensagens
  - notificacoes
  - perfil

### Vantagens

- trocar de contexto e rapido e consistente

### Desvantagens

- limite pratico do numero de abas exibidas simultaneamente

---

## 5) Passagem de parametros entre telas

### Ideia

- Enviar dados da tela A para tela B usando parametros na navegacao.
- Em React Navigation, o mecanismo aparece como `route.params` do lado da tela B.

### Exemplo do material

- Na tela A: `navigation.navigate("Details", { input })`
- Na tela B: `const { input } = route.params`

---

## 6) Navegacao com autenticacao condicional (fluxo protegido)

### Ideia central

- Existe um estado global/local (no material, `isAuthenticated`).
- Se autenticado: mostra o fluxo principal (ex: Drawer).
- Se nao autenticado: mostra a tela de login.

### Como aparece no material

- `useState(false)` inicial.
- Login simulado:
  - credenciais fixas (`user` e `pass`)
- No `App.js`:
  - usa condicao (ternario) para renderizar `AppNavigator` ou `LoginScreen`.

---

## 7) Treino (Gemini): perguntas que a prova pode pedir

1. Difenca entre Drawer e Bottom Tabs (em termos de uso).
2. Quando Stack e mais adequado do que Tabs?
3. Como voce passa e recupera parametros usando `route.params`?
4. Como funciona a logica de fluxo condicional com `isAuthenticated`?
5. Cite uma situacao real onde Drawer faz sentido.

