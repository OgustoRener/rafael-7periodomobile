# Modal no React Native (roteiro + pontos teoricos)

Este resumo vem de:

- `05-aula-Modal-Roteiro.md`
- `Roteiro-Aula-Pratica-Modal.pdf`

---

## 1) Objetivo do exercicio

Construir um Modal reutilizavel, separado em componente externo, para testar:

- `animationType="slide"`
- `animationType="fade"`
- `animationType="none"`

E mostrar por que a modularizacao evita "codigo espaguete".

---

## 2) Estrutura do componente: `CustomModalScreen`

Componentes recebe via props:

- `animation`: string com "slide", "fade" ou "none"
- `themeColor`: cor hex para personalizar visual

Estado local:

- `visible` (boolean)
- inicial: `false` (modal oculto)
- quando clicado: `setVisible(true)`

---

## 3) Configuracao do React Native `Modal`

- `animationType={animation}`: controla o tipo de animacao.
- `transparent={true}`: permite fundo escurecido (overlay/backdrop).
- `visible={visible}`: controla se aparece ou nao.
- `onRequestClose={() => setVisible(false)}`: trata o botao voltar do Android.

---

## 4) Backdrop: fechar ao tocar fora

O material usa a estrategia:

- Um `TouchableOpacity` ocupando a tela inteira como overlay.
- No toque fora do card: `onPressOut` (ou equivalente) chama `setVisible(false)`.

E o card do modal e envolvido por uma `View` (ou estrutura interna) para nao "propagar" fechamento quando o toque acontece dentro do conteudo.

---

## 5) Estilo do card (pontos provaveis)

- largura em torno de `80%` (para o usuario manter contexto)
- `borderRadius` para visual moderno
- `overflow: "hidden"` para recortes corretos do indicador superior
- indicador superior com uma "barra" (linha) na cor `themeColor`

---

## 6) Close manual dentro do card

Sempre existe um botao secundario de fechar (ex: "FECHAR") que seta `visible` para `false`.

---

## 7) Como combinar com navegacao: Bottom Tabs

O material implementa `BottomTabNavigator` com 3 abas:

- `SLIDE` -> `CustomModalScreen animation="slide"`
- `FADE` -> `CustomModalScreen animation="fade"`
- `NONE` -> `CustomModalScreen animation="none"`

Isso serve para:

- comparar comportamentos de animacao em vez de reaproveitar o mesmo `App.js` poluido
- separar contextos e estados visiveis de cada demonstracao

---

## 8) Diferencas conceituais das animacoes

- `slide`: o card entra "subindo" (sensacao de movimento).
- `fade`: o card aparece mudando opacidade, sem mover de posicao.
- `none`: entra instantaneamente, sem transicao suave.

---

## 9) Treino (Gemini)

1. Por que `transparent={true}` e necessario para um fundo escurecido customizado?
2. Qual a funcao de `onRequestClose`?
3. Como implementar a logica "tocar no backdrop fecha"?
4. Diferenca pratica entre `slide`, `fade` e `none` para um usuario.
5. Por que separar Modal em componente externo melhora manutencao?

