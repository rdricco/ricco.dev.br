---
title: O que é um Framework Web?
published: "2020-07-13T21:36:59.459Z"
author: Renato Ricco
summary: |
  #### Framework é uma palavra frequentemente usada no contexto de desenvolvimento web/de software...
layout: blog
path: "/2020-06-01-Fraweworks/"
draft: false
category: "blog"
tags:
  - Programação
---

# {title}

Framework é uma palavra frequentemente usada no contexto de desenvolvimento web/de software. Mas o que é um framework? Um framework, de forma genérica é **uma série de conceitos, práticas e critérios para lidar com um tipo de problema em comum**, são idéias que podem ser usadas como referencia para nos ajudar a resolver problemas de natureza semelhantes. Dentro do desenvolvimento segue uma definição mais direta, onde um framework é definido por um pacote pré-estruturado de arquivos e pastas com códigos padronizados (html, css, js, etc), que servem como base para construir um site ou aplicação.

Se olharmos para diferentes aplicações web, podemos ver que todas tem diversas similaridades entre si. Muitas tem autenticação de usuário, notificações personalizadas, agendamento de tarefas, se conectam a bancos de dados, tem perfis que você pode visitar, etc... Se quisermos, nós podemos escrever toda a lógica por trás desses processos toda vez que quisermos criar uma nova aplicação mas os frameworks existem para tornar esse trabalho mais fácil e nos economizar tempo.

Além disso, boa parte do tempo que gastamos durante o processo de desenvolvimento serve para formatar o nosso código de forma que nos ajude a ser mais eficientes e ajude outros desenvolvedores a entenderem o nosso código. Frameworks web nos ajudam a estruturar nossos projetos e adicionar novas funções sem muito trabalho extra.

Um código é lido muito mais vezes do que é escrito e por isso é tão importante que quando você esta trabalhando com outros desenvolvedores, eles saibam onde encontrar o código para certas tarefas.

Por exemplo: se o framework usado for o LARAVEL, todos os arquivos e códigos relacionados a autenticação de usuários estará localizado em uma pasta chamada "Auth". Com essa organização, mesmo um desenvolvedor com conhecimento mais básico do framework consegue facilmente fazer as alterações necessárias.

É comum se confundir frameworks de desenvolvimento com aplicações ou o contrário, porém ambos tem papéis bem distintos:

- Uma aplicação é um software projetado para ajudar um usuário a executar _tarefas específicas._

- Um Framework facilita o desenvolvimento de uma aplicação, _fornecendo recursos genéricos_ que podem ser alterados ou configurados _para criar uma aplicação específica._

Existem softwares projetados para criação de aplicações para web ou mobile (ex. Wordpress, Dreamweaver), porém o fazem de uma maneira específica, muitas vezes causando limitações ou dificuldades desnecessáiras no processo de desenvolvimento. Na direção oposta, os frameworks visam melhorar o DX (Development Experience) e facilitar o caminho para o desenvolvedor chegar no resultado esperado.

Cada Framework segue convenções para como o código deve ser escrito e estruturado, o que padroniza a forma que os desenvolvedores escrevem seus códigos.

Quando falamos sobre esses frameworks de desenvolvimento, normalmente separamos eles em 3 categorias principais:

- Frontend
- Backend
- UI (Interface de Usuário)

## Framework de Frontend

O Frontend de uma aplicação é a parte que você vê e interage. Em termos de linguagem de programação, é quase sempre composto por HTML (marcação semântica de conteúdo), CSS (estilos visuais) e Javascript (scripts de interação). Existem em grande quantidade, ganharam muita popularidade depois que o React foi lançado em 2013 e o conceito de componentização ficou mais popular.
Abaixo uma lista dos mais populares:

- [Angular](https://angular.io/)

  - Criado pelo Google
  - Encoraja a reusabilidade
  - Melhora a escalabilidade de uma aplicação
  - Curva de aprendizado longa

- [React](https://reactjs.org/)

  - Criado pelo Facebook
  - Serve para criar pacotes de componentes com códigos isolados
  - Organiza código e dados (conteúdo) de forma a serem reutilizados
  - Curva de aprendizado longa

- [Vue](https://vuejs.org/)

  - Rápido
  - Usa conceitos do Angular e React, otimizando-os
  - Curva de aprendizado baixa

- [Svelte](https://svelte.dev/)
  - Muito rápido
  - Código super leve
  - Curva de aprendizado baixa
  - Apresenta novo paradigma de compilação

### Escolhendo o framework

O mundo dos frameworks de Frontend evoluem muito rápido e a cada poucos meses temos novas soluções aparecendo. É importante avaliar os prós e contras de cada um antes da escolha para um projeto, nem sempre uma solução escolhida por estar "em alta" vai atender da melhor forma o seu caso.

## Framework de Backend

Frameworks de backend são bem mais variados, eles são escritos em uma variedade maior de linguagens de programação e tem uma variedade muito maior de funcionalidades entre si. Abaixo, segue uma lista bem incompleta de frameworks usados para criar aplicações backend.

- [Laravel](https://laravel.com/)

  - Linguagem: Php
  - Possui gerenciador de pacotes
  - Comunidade ampla
  - Vasta documentação
  - Muitas funcionalidades por padrão

- [Django](https://www.djangoproject.com/)

  - Linguagem: Python
  - Pode ser difícil trabalhar o frontend
  - Muitas funcionalidades por padrão

- [Ruby on Rails](https://rubyonrails.org/)

  - Linguagem: Ruby
  - Tem ótimas ferramentas para inicio de projetos
  - Muitas funcionalidades por padrão
  - Ruby demora mais pra executar programas do que outras linguagens

- [Express](https://expressjs.com/)
  - Linguagem: JavaScript
  - Super personalizável
  - Muito leve
  - Menos recursos nativos
  - Node é super rápido

### Escolhendo o framework

Normalmente, você escolhe o framework de backend baseado na linguam de programação que ele é escrito. Também é levado em consideração as funcionalidades que você pretende adicionar, um login de usuário por exemplo, será mais fácil de escrever em Django que já possui esse recurso embutido do que em Flask onde você provavelmente precisará de um seriço adicional.

## Frameworks de Interface

Frameworks de Interface de Usuário ajudam a criar aplicações web com visual profissional. A maioria inclui algum tipo de sistema de grid para facilitar o alinhamento de elementos, tem esquemas de cores já definidos e estilizam os elementos de html mais comuns para padrões limpos e profissionais. Eles servem como complemento mas não são dependentes de Frameworks de Frontend.

- [Bootstrap](https://getbootstrap.com/)

  - Desenvolvido pelo Twitter
  - Fácil de aprender e parecer profissional
  - Fácil de identificar um "Site Bootstrap"
  - Pode ser difícil personalizar componentes

- [Foundation](https://get.foundation/)

  - Controle avançado de responsividade
  - Muitos exemplos para inicio rápido de projeto
  - Visual profissional/enterprise
  - Usado por: Adobe, EA, Samsung, eBay, Disney.

- [Tailwind](https://tailwindcss.com/)

  - Altamente personalizavel
  - Não opinativo, não força nenhum padrão de estilo
  - Muitos exemplos criados pela comunidade

- [Fast](https://www.fast.design/)
  - Desenvolvido pela Microsoft
  - Fácil integração com Frameworks de Front End
  - Baseado em padrões modernos como web components

### Escolhendo o framework

Escolher um framework de interface muitas vezes parte de preferencias pessoais na aparencia e nos objetivos do site. Diferentes estilos podem ter forte apelo em diferentes indústrias ou ainda transmitir melhor uma mensagem aos seus usuários. Não há uma regra mas é importante que a equipe de criação tenha experiência com o framework e entenda seus padrões e limitações, caso contrário a ecolha pode trazer mais dificuldade no desenvolvimento do que soluções.

## BÔNUS: Frameworks de Email

Se você já trabalha com e-mail marketing há algum tempo, provavelmente já teve uma série de problemas com suas campanhas. De imagens perdidas a problemas de entrega, o marketing por email é repleto de desafios. Embora a web e o e-mail sejam desenvolvidos com as mesmas tecnologias (HTML e CSS), os aplicativos de e-mail não seguem os mesmos padrões dos navegadores da web. Cada aplicativo de e-mail tem seu próprio mecanismo de renderização que determina qual código é compatível e como os e-mails são exibidos. A má notícia para nós é que todos esses mecanismos de renderização suportam diferentes tags HTML e propriedades CSS entre si. Por causa disso, não podemos usar os mesmos princípios de codificação usados no web design. É aí que entram os frameworks de email, que buscam garantir consistência do layout gerado para essas variações além de oferecer soluções para acessibilidade, responsividade entre outras tarefas que além de difíceis levam bastante tempo para serem desenvolvidas.

- [Foundation Emails](https://get.foundation/emails.html)

  - Parte do framework CSS Foundation
  - Visual profissional
  - Focado em responsividade

- [mjml](https://mjml.io/)

  - Desenvolvido pela [Mailjet](https://www.mailjet.com/)
  - Grande diversidade de Templates disponíveis
  - Amplo suporte a dispostivos

- [Maizzle](https://maizzle.com/)
  - Baseado em Tailwind CSS
  - Componentização de elementos
  - Super customizável

### Escolhendo o framework

A escolha do framework de email dependerá de sua ferramenta de disparo de email. Há muitas ferramentas no mercado que alteram o código enviado, retirando todas as otimizações feitas pelo framework e muitas vezes até tornando o código inutilizável. Por isso, é muito importante verificar a compatilidade das ferramentas antes dessa ecolha.

## Conclusão

Existem soluções para as mais diversas situações e todas possuem suas vantagens e desvantagens.
