---
title: O que é ECMAScript?
published: "2020-06-15T21:36:59.459Z"
author: Renato Ricco
summary: |
  #### Muitas vezes, os desenvolvedores usam JavaScript e ECMAScript como sinônimos. Embora estejam intimamente ligados um ao outro, isso não significa que sejam a mesma coisa..
layout: blog
draft: false
category: "blog"
tags:
  - programação
---

# {title}

Muitas vezes, os desenvolvedores usam JavaScript e ECMAScript como sinônimos. Embora estejam intimamente ligados um ao outro, isso não significa que sejam a mesma coisa.

Há uma história completa sobre a história do JavaScript e como ele surgiu. Para encurtar a história, ECMA em ECMAScript refere-se à Europen Computer Manufacturers Association para a qual JavaScript 1.1 foi submetido para padronização no ano de 1997. Um comitê técnico foi criado com o objetivo de padronizar a sintaxe e semântica para propósitos genéricos, funcionando em cross-platform e com uma linguagem de script independente do fornecedor.

O comitê foi formado por desenvolvedores da Sun Microsystems, Netscape Communication, Microsoft e várias outras empresas. Eles criaram o ECMA-262, que é um padrão que define uma nova linguagem de script e uma linguagem de script de propósito geral chamada ECMAScript, à qual todos os navegadores devem aderir para criar suas próprias implementações de JavaScript.

## ECMAScript não é somente para navegadores

ECMAScript é uma linguagem de script cross-platform de uso geral e não está vinculada apenas a navegadores da web. ECMA-262 define os padrões com base nos quais uma linguagem de script mais robusta pode ser construída. ECMA-262 define as seguintes partes do idioma e não se refere a navegadores da web:

- Sintaxe
- Tipos
- Statements
- Palavras-chave
- Palavras reservadas
- Operadores
- Objetos Globais

JavaScript apenas implementa ECMAScript em uma linguagem de script mais madura e robusta com vários métodos de entrada e saída que os desenvolvedores podem, por sua vez, usar para construir vários aplicativos.

## Conformidade ECMAScript

Então, o que significa conformidade com ECMAScript? Quando uma linguagem de programação seria considerada em conformidade com o ECMAScript com base nos padrões estabelecidos no ECMA-262? Você pode ver a [Especificação ECMAScript](https://www.ecma-international.org/ecma-262/) mais recente, mas a conformidade de uma implementação se resume ao seguinte:

- Uma implementação deve oferecer suporte a todas as partes da linguagem, conforme mencionado no padrão e destacado acima.
- Suporta o padrão de caracteres Unicode.
- Uma implementação em conformidade pode adicionar outros tipos, objetos, funções, etc. que não são especificados no documento de especificação.
- Estenda o suporte embutido para expressões regulares.

Há uma [suite de teste para ECMA-262](https://github.com/tc39/test262) disponível no GitHub e usada para testar a conformidade com os padrões.

## O motor do JavaScript

Um mecanismo motor JavaScript pode ser referido como um programa ou interpretador que lê seu código JavaScript e o converte em um código compreensível por máquina. Cada navegador da web é executado em um mecanismo diferente e o mais comum deles é o V8 Engine do Google, que é de código aberto e implementado por NodeJs também. Aqui estão alguns exemplos comuns de vários navegadores e os mecanismos JavaScript que eles usam:

- Google Chrome - V8 Engine
- Firefox - Spidermonkey
- Microsoft Edge - Chakra, trocado recentemente pelo V8 Engine
- Safari - Nitro, conhecido como JavaScriptCore

É o JavaScript Engine que funciona como um interpretador e está imprensado entre o código de máquina e um JavaScript Runtime (também conhecido como JavaScript Host). Já que agora entendemos qual é a função de um JavaScript Engine, vamos mergulhar mais fundo e tentar entender o que é um JavaScript Runtime.

## Runtime JavaScript ou Host JavaScript

Um runtime JavaScript (ou um host JavaScript) pode ser entendido como um contêiner que usa o JavaScript Engine para gerar APIs que podem ser usadas por desenvolvedores de software para criar aplicativos usando JavaScript. Tomando um exemplo de um runtime JavaScript em um navegador, ele normalmente conteria as implementações de JavaScript que são mais específicas para um navegador. Considerando que um runtime para algo como NodeJs teria implementações específicas que são mais específicas para executar e construir um aplicativo do lado do servidor usando JavaScript.

### JavaScript Runtime - O segredo de como o NodeJS e o Google Chrome são executados no mesmo mecanismo V8.

Como agora sabemos o que são o JavaScript Engine e o JavaScript Host Environment (JavaScript Runtime), estamos em uma posição melhor para entender como NodeJs e o Google Chrome são executados no mesmo V8 Engine e ainda executam funcionalidades muito diferentes. O segredo é que eles têm o mesmo mecanismo de JavaScript, mas um runtime JavaScript muito diferente. Em suma, o runtime de um navegador pode ter as seguintes implementações básicas que são úteis para criar aplicativos da web:

- **The Core** - A implementação básica de JavaScript com todas as funções de entrada e saída que os desenvolvedores podem usar.
- **Document Object Model (DOM)** - Isso é o que o navegador renderiza como uma hierarquia de nós a serem exibidos para o cliente ou usuário para XML e HTML.
- **Browser Object Model (BOM)** - É o que permite aos desenvolvedores manipular a janela do navegador. Usando o BOM, os desenvolvedores podem acessar os recursos do navegador e manipulá-los fora do contexto do DOM ou da página que está sendo renderizada.

Por outro lado, um runtime NodeJs teria implementações que são úteis para desenvolver aplicativos do lado do servidor. Ele contém as seguintes implementações como exemplo:

- **Require**
- **Buffers**
- **Processos**

## ES6, ES2015, ou ES Harmony: O que isso significa?

É a sexta edição da ECMA-262, lançada no ano de 2015, conhecida como ES6, ES2015 e ES Harmony. Essencialmente, todos esses termos se referem à mesma edição da ECMA-262. Consequentemente, a ECMA tem publicado uma nova edição de especificações a cada ano, então a 7ª edição saiu no ano de 2016 e assim por diante.

É a sexta edição do ECMA-262 que trouxe a coleção mais desejável e importante de aprimoramentos ao ECMAScript e, portanto, o ES6 é considerado um marco e muda a maneira como temos usado JavaScript. É por isso que o ES6 é considerado uma mudança importante e uma nova maneira de escrever JavaScript. Ele trouxe suporte formal para classes, módulos, iteradores, geradores, arrow functions, promises e uma série de novos tipos de dados.

## Mas os navegadores oferecem suporte a esses padrões rapidamente?

A resposta é não! O nível de adoção do ES6 tem sido inconsistente em todos os navegadores. Por exemplo, o Internet Explorer 11 está em conformidade apenas com os padrões ES5 e não ES6, portanto, trazendo muita incompatibilidade e confusão em torno de diferentes navegadores que suportam diferentes versões dos Padrões ECMAScript. Existem maneiras muito elegantes de escrever aplicativos usando os recursos mais recentes oferecidos pelo JavaScript e ainda em conformidade com os navegadores legados. Para isso podemos adotar fluxos de trabalho e ferramentas de desenvolvimento mais modernas mas esse é um assunto que merece um artigo dedicado, graças a evolução exponencial que a area de desenvolvimento tem passado nos últimos 10/15 anos.
