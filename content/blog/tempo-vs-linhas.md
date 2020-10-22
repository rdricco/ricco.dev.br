---
title: 40 horas VS 2 linhas de código
date: "2020-06-01T21:36:59.459Z"
author: Renato Ricco
excerpt: |
  #### Por que uma correção que parece tão simples ao observar as alterações feitas levou dois dias para ser concluída?
template: post
draft: false
category: "blog"
tags:
  - desenvolvimento
---

# {title}

Uma das perguntas que mais tenho medo de ouvir é:

> Se era só adicionar duas linhas de código, porque você levou dois dias?

Pode parecer uma pergunta razoável, mas faz algumas suposições terríveis:

- linhas de código = esforço
- linhas de código = valor
- todas as linhas de código são iguais

Nada disso é verdade.

Por que uma correção que parece tão simples ao observar as alterações feitas leva dois dias para ser concluída? Vejamos uma pequena lista de possíveis situações:

**Porque o problema foi relatado com uma descrição vaga de como recriá-lo.**

Levei várias horas para reproduzir de forma confiável o item. Alguns desenvolvedores teriam voltado imediatamente para a pessoa que relatou o problema e exigido mais informações antes de investigar. Tento fazer o máximo que posso com as informações fornecidas. Eu sei que alguns desenvolvedores não gostam de ter que consertar bugs, então fazem o que podem para resolver isso. Alegar que não há o suficiente é uma ótima maneira de parecer que você está tentando ajudar, mas não precisa fazer nada. Sei que relatar erros pode ser difícil e sou grato a todos que o fazem. Quero mostrar minha gratidão pelos relatórios de erros, tentando fazer o máximo possível com as informações fornecidas antes de solicitar mais detalhes.

**Como o problema relatado estava relacionado à uma funcionalidade que não estou familiarizado.**

O recurso com o qual ele se referia era algo que raramente uso e não é algo que já usei com muitos detalhes. Isso significa que demorei mais do que o necessário para entender como usá-lo e as nuances de como ele interage com o bug.

**Porque dediquei um tempo para investigar a causa real do problema e não apenas seus sintomas**.

Se algum código estiver gerando um erro você pode simplesmente envolvê-lo em uma instrução try..catch e suprimir o erro. Sem erro, sem problema. Certo? Desculpe, para mim tornar o problema invisível não é o mesmo que corrigi-lo. "Engolir" um erro pode facilmente levar a outros efeitos colaterais inesperados. Não quero ter que lidar com eles em um momento no futuro.

**Porque investiguei se havia outras maneiras de chegar ao mesmo problema, não apenas as etapas de reprodução relatadas**.

Um conjunto de etapas de reprodução pode facilmente fazer com que o erro pareça estar em um lugar quando na verdade pode ser mais profundo. Encontrar a causa exata de um problema e examinar todas as maneiras de chegar lá pode fornecer informações valiosas. Informações de como o código é realmente usado, onde pode haver outros lugares com possíveis problemas que podem precisar de resolução ou pode também mostrar inconsistências no código que significam que um erro foi causado (ou tratado) em um caminho de código mas não outro.

**Porque reservei um tempo para verificar se havia outras partes do código que poderiam ser afetadas de maneiras semelhantes**.

Se um erro levou ao bug, o mesmo erro também pode ter sido cometido em outro lugar no código. Agora é um ótimo momento para verificar.

**Porque quando descobri a causa do problema, procurei encontrar a maneira mais simples de consertá-lo que tivesse o risco mínimo de apresentar efeitos colaterais**.

Eu não quero a solução mais rápida possível. Quero uma solução que provavelmente não cause confusão ou outros problemas no futuro.

**Porque testei a mudança e verifiquei se ela abordava o problema para todos os caminhos de código diferentes que foram afetados**.

Não quero depender de outra pessoa para testar se o que fiz está correto. Não quero que um bug seja encontrado no futuro e que eu tenha que voltar a esse código. A troca de contexto é cara e frustrante. Ter um testador dedicado para examinar a "mesma" alteração novamente é algo que desejo evitar sempre que possível.

Não gosto de ter que consertar bugs. Em parte porque podem parecer o resultado de um fracasso anterior de minha parte. O outro motivo pelo qual não gosto de consertar bugs é que prefiro trabalhar em coisas novas.

O que é pior do que corrigir um bug?
Ter que consertar o mesmo bug repetidamente.
Eu dedico um tempo para garantir que qualquer bug seja totalmente corrigido sempre que for encontrado para que não precise ser enfrentado, investigado, corrigido e testado mais de uma vez.
