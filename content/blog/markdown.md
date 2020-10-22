---
title: O que é Markdown?
date: "2020-07-27T21:36:59.459Z"
author: Renato Ricco
excerpt: |
  #### XXXXXXX
template: post
draft: false
category: "blog"
tags:
  - dev
  - tecnologia
---

# {title}

O Markdown se tornou tão onipresente para os desenvolvedores que muitas vezes é dado como certo e assumido que quase qualquer pessoa que cria conteúdo está familiarizado com ele. No entanto, quando você sai dos círculos de desenvolvedores, torna-se muito menos comum que alguém já tenha ouvido falar dele, muito menos o tenha usado. O principal meio de criação de conteúdo para o não desenvolvedor comum ainda é o Word ou uma ferramenta com uma experiência de criação semelhante (por exemplo, Pages ou Google Docs).

Se você não conhece o Markdown, mas acaba escrevendo ou editando conteúdo para sites Jamstack, você pode estar se perguntando do que se trata toda essa formatação estranha. Neste post, espero oferecer alguns antecedentes sobre o que é Markdown e o papel que ele normalmente desempenha no Jamstack.

## Uma breve história do Markdown

Markdown foi originalmente [lançado em 2004 por John Gruber,](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://daringfireball.net/projects/markdown/&usg=ALkJrhiN7AEIwGn78-c4s-jEouaHefDz3A) que já era muito conhecido por seu blog focado na Apple. Ele criou a sintaxe em colaboração com Aaron Swartz, co-fundador do Reddit.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--qlpXJrqp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d0ofo6ivwkjwhh0zk19g.png) 

Markdown tem duas partes:


Uma sintaxe para marcar documentos de texto simples.
Uma ferramenta (originalmente escrita em Perl) para converter essa marcação em HTML válido.


A ideia era que o Markdown não só seria fácil de escrever, com uma sintaxe relativamente limitada e simples, mas, mais importante, seria fácil de ler. Isso contrastou com a escrita em HTML puro, que tem uma marcação baseada em tag que pode ser prolixa e dificultar a legibilidade, especialmente se você não estiver familiarizado com os significados de cada tag.

Embora outras linguagens de marcação como BBCode, Textile, AsciiDoc e ReStructuredText já existissem, o Markdown se popularizou e foi adotado por sites como GitHub, Reddit e StackOverflow para formatar conteúdo. Como outras linguagens de marcação, como Textile, Markdown não tinha nenhuma especificação oficial, o que levou a um dos aspectos mais duradouros e confusos do Markdown.


### "Sabores" de Markdown


O script Markdown Perl original que ainda está disponível no site de John Gruber para download foi atualizado pela última vez no final de 2004. Markdown teve alguns problemas, que Jeff Atwood detalhou em 2009 , mas eles nunca foram resolvidos pelo Markdown "oficial". Isso levou a melhorias sendo feitas em cada implementação individual do Markdown. Cada uma dessas variantes do Markdown costuma ser chamada de sabores.

A lista mais precisa que posso encontrar identifica 36 sabores de Markdown , cada um com suas próprias variações de sintaxe particulares. Aqueles de nós com experiência em Markdown provavelmente encontraram essas diferenças. Freqüentemente, eles se tornam visíveis em pequenas diferenças de renderização ao copiar o Markdown de um programa para outro.

Esses problemas levaram à criação da especificação CommonMark , que visava criar um padrão claro e em evolução para a sintaxe Markdown. Embora isso tenha levado a alguns programas e implementações de Markdown a adotar o padrão, a adoção está longe de ser universal. Felizmente, na maioria dos casos, as diferenças de renderização tendem a ser pequenas.

## Geradores de Markdown e Static Site

Jekyll foi um dos primeiros geradores de sites estáticos que ganhou ampla adoção, em parte porque era a ferramenta padrão com suporte nas páginas do GitHub. Jekyll mudou de marcação têxtil para Markdown em 2008 com o lançamento da v0.1.3 . A maioria dos geradores de sites estáticos populares que se seguiram também suportavam Markdown por padrão.

Os desenvolvedores ficaram cada vez mais confortáveis ​​com o Markdown por causa de sua adoção em sites que eram populares entre eles. Assim, uma das primeiras atrações dos geradores de sites estáticos para a criação de sites - especialmente blogs - foi a capacidade de criar conteúdo usando Markdown. Eventualmente, Markdown tornou-se tão incorporado no ecossistema de geradores de sites estáticos que, com a introdução do termo JAMstack (agora Jamstack), muitas pessoas ainda confundem o M no acrônimo JAM para Markdown (tanto que uma vez escrevi um post sobre esse tópico sozinho ).

### Matéria de frente

Um dos benefícios do Markdown era que ele era flexível o suficiente para atender a quase todas as tarefas relacionadas ao conteúdo, pois, na maioria dos casos, era implementado para permitir qualquer HTML arbitrário. No entanto, isso não atendeu completamente às necessidades dos geradores de sites estáticos. Postagens e páginas frequentemente precisavam de alguma forma de propriedades ou metadados que continham dados associados ao conteúdo. Isso introduziu o conceito de matéria frontal.

O assunto inicial geralmente são dados YAML, TOML ou JSON colocados no início de um arquivo Markdown que contém todos os metadados associados a esse arquivo. Pode incluir coisas como atributos de SEO de uma postagem, qual modelo usar para renderizar uma página ou estruturas complexas de navegação ou taxonomias. Realmente não há um limite para o que é permitido em primeiro lugar.

Aqui está um exemplo muito simples de frontmatter YAML que você pode encontrar em uma postagem do Jekyll:


`
---
layout: default
title: What is Markdown?
date: 2020-05-20 12:34
author: Brian Rinaldi
---

This is my post.

`

Em alguns casos, esse assunto inicial pode conter a maior parte do conteúdo de uma página. Por exemplo, a página inicial de um site pode muitas vezes ter uma capa longa e complexa que define o conteúdo para as várias seções e subseções do design.

## Markdown no Modern Jamstack

O lugar central do Markdown nos geradores de sites estáticos significa que ele continua sendo um ingrediente-chave nos aplicativos Jamstack modernos. Isso praticamente não diminuiu, pois os aplicativos Jamstack passaram a usar o CMS sem comando para gerenciar conteúdo.


### Remarcação em CMS Headless


Existem dois tipos principais de Headless CMS: baseado em git e baseado em API. (Não tem certeza de quais são as diferenças? Eu as [explico aqui](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://docs.stackbit.com/best-practices/api-versus-git-based-cms/&usg=ALkJrhjGoqQ5tZLRvQdfPj5jpKM6Y4gm6Q) .) Independentemente do tipo que você escolher, em algum ponto você acabará trabalhando com Markdown.

Uma vez que um CMS baseado em git adiciona uma camada de gerenciamento de conteúdo sobre seu conteúdo baseado em arquivos existentes, um componente chave de qualquer CMS baseado em git é um editor Markdown. Por exemplo, aqui está o editor Markdown integrado ao Netlify CMS:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--1h4daa9p--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/hyd0u08y09ay052th0my.png)


Em vez de exigir que todos os redatores e editores de conteúdo conheçam o Markdown, o CMS baseado em git fornece um editor de estilo WYSIWYG (o que você vê é o que você obtém) para gerenciar conteúdo baseado em Markdown. Isso imita a experiência dos editores de HTML WYSIWYG comuns no CMS tradicional, com a diferença, é claro, de que a fonte resultante é a sintaxe Markdown escrita.

Da mesma forma, o CMS baseado em API geralmente fornecerá um editor Markdown no estilo WYSIWYG para conteúdo de texto longo. Por exemplo, aqui está o editor Markdown dentro de Contentful:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--aqU3jAnm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/maap7ctc9gdury8cfhiy.png)

Uma diferença importante é que a maioria dos CMS baseados em API também fornece alguma forma de conteúdo de formato longo estruturado. Por exemplo, em Contentful é denominado Rich Text ou em Sanity é denominado Block Content. Embora os editores WYSIWYG geralmente se pareçam com seu editor Markdown comparável, a fonte subjacente é muito diferente, em vez disso, depende de alguma forma de especificação de rich text que, no caso de um site, precisaria ser convertida para HTML.

Por que a diferença? Por que não usar Markdown para rich text? O principal aqui é que o Markdown foi projetado para ser convertido em HTML. Os Headless CMS baseados em API são projetados para criar conteúdo que pode conduzir mais do que apenas páginas da web. Isso significa que o resultado final do texto estruturado nem sempre pode ser HTML. Além disso, essas especificações de rich text geralmente têm suporte para coisas que o Markdown não oferece, como vincular objetos no CMS, por exemplo.

### MDX

A incapacidade do Markdown de incorporar facilmente elementos complexos da interface do usuário levou a uma maior expansão do ecossistema Markdown com a criação do [MDX](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://mdxjs.com/&usg=ALkJrhhN8d6qC6Zzq2IsBKjO94d8cqeY-A) . Embora o Markdown possa geralmente aceitar qualquer HTML arbitrário em casos de uso que a sintaxe do Markdown não cobre, isso ainda representa um problema para sites baseados em React que requerem componentes React em vez de HTML padrão.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--5F_ejpTC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d3haphoghonq8h2uihnw.png)

MDX visa resolver esse problema permitindo que o autor incorpore [JSX](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://reactjs.org/docs/introducing-jsx.html&usg=ALkJrhiMreu4VQDvz84JHQzND2kbpn3TfA) , que são efetivamente uma representação JavaScript de HTML, no texto Markdown. Com o uso generalizado de geradores de sites estáticos baseados em React, como Next.js e Gatsby, o uso de MDX aumentou. No entanto, continua sendo uma solução centrada no desenvolvedor, e não algo que alguém esperaria que um autor ou editor de conteúdo não desenvolvedor precisaria se familiarizar.

## Para onde ir a partir daqui

Se você já conhece o Markdown, então esperançosamente esta foi uma boa olhada no ecossistema que depende dele. Se você é novo no Markdown, então esperançosamente isso ofereceu algumas boas informações sobre o que é e como usá-lo. Independentemente disso, gostaria de deixar alguns recursos e ferramentas relacionados ao uso do Markdown.

* [Mastering Markdown](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://guides.github.com/features/mastering-markdown/&usg=ALkJrhguJN-etPfPGDGImrIeBEMAyJkD5w) \- uma visão geral abrangente do Markdown e do uso da sintaxe Markdown com sabor do GitHub.
* [Tutorial CommonMark Markdown](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://commonmark.org/help/&usg=ALkJrhhW8Cz2YB5zlWISHQETQ6IFpWcjBA) \- uma boa referência para um tipo comum de sintaxe Markdown. Ele vai te ensinar o básico que cruza as várias implementações e tem um bom tutorial interativo para aprender a sintaxe do Markdown.
* [Typora](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://typora.io/&usg=ALkJrhjy81J8ZpWaO-ISbtmIzQXJouFT-g) \- um excelente editor (ainda em beta e gratuito) para escrever e ler Markdown disponível para MacOS, Windows e Linux.
* [Colar como Markdown](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=http://markitdown.medusis.com/&usg=ALkJrhi4fIHLmAgzmUzoPeXhHOQW4a0BtA) \- para quando você precisar converter rapidamente rich text copiado (por exemplo, do navegador) para Markdown.
* [Conversor de Word para Markdown](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://word2md.com/&usg=ALkJrhi8s0gZXND-XojBUA75dnXVUhfhXQ) \- embora longe de ser perfeito, esta ferramenta pode ajudar na compressão de documentos do Word.
* [Deckset](https://translate.googleusercontent.com/translate_c?depth=1&pto=aue&rurl=translate.google.com&sl=en&sp=nmt4&tl=pt&u=https://www.deckset.com/&usg=ALkJrhidFi2SAadufO05FkMqGNSyXQsHdg) \- uma ferramenta de que gosto para criar apresentações de slides completas usando apenas Markdown (somente Mac).
* 