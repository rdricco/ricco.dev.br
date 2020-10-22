---
title: O que é o DOM?
date: "2020-06-08T21:36:59.459Z"
author: Renato Ricco
excerpt: |
  #### Document Object Model
template: post
draft: false
category: "blog"
tags:
  - dev
  - tecnologia
---

# {title}

DOM é um acrônimo que significa Document Object Model. É uma interface de programação (ou API) que permite acessar e modificar o conteúdo de um documento HTML, XML ou SVG.

Seu objetivo principal é fornecer uma estrutura de árvore clara e completa do documento. Essa estrutura em árvore é composta de nós e objetos, todos ligados entre si, para os quais vários métodos e atributos estão disponíveis. Desta forma, é possível recuperar o conteúdo ou estilo de cada elemento, como por exemplo, o tamanho da janela do navegador, a cor de fundo de uma página da web, o tamanho em pixels da borda de um botão e outras coisas.

Seu segundo objetivo é permitir modificar o conteúdo ou estilo de cada nó do documento, por exemplo, para atualizar um texto contido em uma tag `<p>`, para mudar a cor de um `<div>` ou para ouvi monitorar eventos (o clique de um botão, por exemplo).

Embora o DOM seja usado principalmente em JavaScript, qualquer linguagem pode usá-lo. Assim, PHP, Python ou Go podem se beneficiar do DOM.

## Um pouco de história

No início, todos os navegadores de internet tinham suas próprias versões do DOM, então nem todos permitiam a mesma coisa e havia muitas diferenças. Isso causou um grande problema porque um script JavaScript em um navegador não funcionava necessariamente em outro navegador.

É aí que o W3C entrou, você pode já ter ouvido falar dele. Sem entrar em detalhes, o W3C é um consórcio (agrupamento) de mais de 430 empresas parceiras ao redor do mundo que foi fundado em 1994. É uma organização sem fins lucrativos responsável por definir padrões para tecnologias web, incluindo: DOM, HTML ou CSS (entre outros...).

Hoje, os navegadores da web implementam os padrões definidos pelo W3C. Aquele em que estamos interessados - o DOM - está incorporado no padrão HTML5.

Na verdade, pouco antes de exibir uma página da web, o navegador lê o conteúdo do arquivo HTML e cria o DOM. A propósito, ele valida e corrige se alguma coisa estiver faltando.

O DOM é composto de um documento que realmente representa sua página da web na forma de uma árvore. Esta árvore contém nós (_nodes_) sobre nós. Cada um desses nós tem um tipo, muitas vezes o tipo HTMLElement abreviado para Elemento representando, por exemplo, uma tag `<div>` e todos os seus outros elementos HTML. Esses objetos têm propriedades como largura acessível para leitura / gravação ou classList acessível somente para leitura. Essas propriedades permitem que você recupere ou modifique o conteúdo da página da web.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1599512431733/UzBiOCd06.png?auto=format&q=60)

Árvore DOM (Fonte: Wikipedia)

ℹ️ Podem existir nós (nodes) que não sejam do tipo Element, razão pela qual o documento não consiste apenas neste tipo de nó, embora representem a grande maioria.

## Um pouco de código

Um dos métodos mais conhecidos do DOM é aquele que permite recuperar um `Element` por seu atributo` id`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Página de Exemplo</title>
  </head>
  <body>
    <p id="primeiro-paragrafo" class="text-red">Meu texto</p>
    <script src="main.js"></script>
  </body>
</html>
```

_Exemplo de um documento HTML (index.html)_

Vamos imaginar que queremos - em JavaScript - recuperar o conteúdo de nossa tag `<p>`. Tudo o que precisamos fazer é usar o DOM em um script.

```js
const paragrafo = document.getElementById("primeiro-paragrafo");
console.log(paragrafo.text);
// exibe "Meu texto".

// Se você quiser verificar as classes do elemento
console.log(paragrafo.classList);
// exibe ["text-red"].

// Você também pode modificar os elementos
paragrafo.innerText = "Meu paragrafo modificado";
paragrafo.style.color = "green";
paragrafo.classList.add("text-bold");
```

_Exemplo de script JavaScript (main.js)_

```html
<!-- Enquanto carregamos nosso arquivo html -->
<p id="primeiro-paragrafo" class="text-red">Meu paragrafo</p>

<!-- Depois de executar nosso código JavaScript -->
<p id="primeiro-paragrafo" class="text-red text-bold">
  Meu paragrafo modificado
</p>
```

_Onde o documento é modificado com a execução do código JavaScript acima_

## Diferenças com o código HTML

Ao contrário de um arquivo HTML que nunca é modificado quando uma página da web é exibida, **o DOM é constantemente atualizado**. É por isso que com JavaScript é possível saber se um elemento HTML (representado por um `Elemento`) está atualmente visível ou não para o usuário.

Além disso, o **DOM não reflete necessariamente o código HTML presente em seu arquivo de origem** por alguns motivos:

- algum conteúdo pode ter sido adicionado usando JavaScript
- atributos de seus elementos HTML podem ter sido modificados no DOM

## Finalizando

Alguns pontos-chave:

- o DOM é uma **interface de programação** (API) que permite acesso e modificação de um documento (HTML, XML, SVG)
- o DOM é um `Documento` em si composto de vários`Nós` e vários `Elemento`
- cada `Elemento` possui propriedades como`atributos` e `texto`
- o DOM não é uma representação exata de HTML
- um `Elemento` é um`Nó` específico`
- existem [vários tipos](https://developer.mozilla.org/pt-br/docs/Web/API/Node) de `Node`
