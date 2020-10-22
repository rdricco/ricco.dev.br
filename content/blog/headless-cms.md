---
title: O que é um Headless CMS? 
date: 2020-08-03T21:36:59.459Z
author: Renato Ricco
excerpt: |
  #### XXXXX
template: post
draft: false
category: "blog"
tags:
  - dev
  - tecnologia
---

# {title}

## **Intro: CMS Tradicional**

CMS tradicional é uma ferramenta popular para criação na web. De uma maneira fácil, os usuários podem criar e editar o conteúdo e armazená-lo no banco de dados back-end. Todas essas funcionalidades em um único sistema.

Escolhendo entre vários modelos e temas, a aparência pode ser personalizada e as funcionalidades expandidas com os plug-ins disponíveis. Esses CMSs geralmente fornecem uma experiência “O que você vê é o que você obtém” (WYSIWYG), tornando-os mais fáceis de usar para pessoas não técnicas.

Então normalmente, um **CMS tradicional consiste em**:

* um banco de dados para armazenar o conteúdo,
* um painel de administração para gerenciamento,
* uma camada de frontend para exibir o conteúdo
* uma API interna que una tudo isso,

O importante aqui é que o front-end e o back-end fazem parte de uma coisa só e são arquitetados como um monólito.

These CMS were created to manage web page content, meaning that the content created in the backend was also tightly coupled with its display on the web. This meant that content was not typically reusable. A headline on the home page might be duplicated for display on a landing page - and updating one did not update the other. Because the content was specifically intended for the web, it also could not be reused in things like a mobile app.

## **Headless CMS**

Em resumo - um CMS Headless é um back-end dedicado ao sistema de gerenciamento de conteúdo.

Lembre-se de que o CMS tradicional, como Wordpress ou Drupal, tem o front-end e o back-end fortemente vinculados, certo?

Headless CMS é o oposto - ele separa o gerenciamento de conteúdo da camada de apresentação. Se „head” é a camada de apresentação (ou frontend) e „body” é o repositório de conteúdo - cortamos a cabeça do corpo, daí o nome „headless”. O que resta é o conteúdo bruto que podemos acessar por meio de chamadas de API. Nosso CMS agora é uma fonte de dados apenas de conteúdo.

E uma vez que não temos mais um front-end padrão, somos livres para criar quantas "cabeças" quisermos e entregar nosso conteúdo a qualquer dispositivo. Isso também significa que não há restrições sobre a estrutura ou ferramentas que você usa.

Além disso, essa abordagem modular é um modelo perfeito para aplicações JAMstack.

A headless CMS can manage content irrespective of the frontend output and typically allows content items, like the theoretical headline we discussed above, to be reused both across the web app but also in things like mobile apps, chat apps, voice apps, etc.

### Quais são os benefícios do CMS sem cabeça?

* **Flexibilidade** - você tem controle total sobre a aparência de seu conteúdo e pode trabalhar com suas estruturas e ferramentas favoritas
* **Segurança aprimorada** - uma vez que a plataforma de publicação de conteúdo não está vinculada ao banco de dados - o risco de ataques de malware é menor
* **Reutilização** - você pode reutilizar e redirecionar seu conteúdo para servir a qualquer canal digital
* **Fácil de usar** - o conteúdo entregue via API é mais fácil de manter e distribuir, e é mais fácil de editar para pessoas não técnicas
* **Preparado para o futuro** - como as camadas de apresentação e lógica são separadas, você pode estruturar seu conteúdo e torná-lo adaptável a futuras modificações

### Quando Você deve perder a cabeça?

Se você acha que o CMS tradicional é muito limitante para você e precisa de uma ferramenta mais flexível, então você deve adotar Headless.
Se você deseja criar sites exclusivos que podem ser exibidos em qualquer dispositivo, você não terá lucro com um modelo predefinido.
Além disso, um CMS tradicional oferece tudo pronto para uso, mas como efeito colateral, você acabará acumulando muito código desnecessário.
Esse não é o caso do Headless CMS, em que você pode optar por integrar apenas as funcionalidades que realmente precisa.
E como mencionado antes, ele é agnóstico em termos de tecnologia, o que significa que você não está restrito a uma tecnologia específica. 

É uma solução amigável ao desenvolvedor e perfeito para casos como:

* sites e aplicativos baseados em qualquer estrutura JavaScript (React, VueJS, AngularJS),
* sites feitos com um gerador de sites estáticos (por exemplo, Gatsby)
* entrega de conteúdo a vários canais.


### Plataformas Headless

Aqui está uma lista de algumas das plataformas Headless CMS mais populares do momento:

* Strapi
* DatoCMS
* Contentful
* Directus
* GraphCMS

Exemplos de uso:

* The Economist
* Burger King
* Ikea AR mobile app

## Diferença entre API-based e Git-based Headless CMS?

### Git-based Headless CMS

The key thing to understand about a git-based headless CMS is that it does not store your content. Instead, content is maintained in a Git repository - often as Markdown for long-form content and YAML or JSON for data. The CMS provides a layer of tooling for managing this content via a web interface that is easy to understand for content editors who may be uncomfortable manually editing the file-based content.

**Git-based CMS**:

* Git (file-based content in your GitHub repo)
* Netlify CMS
* Forestry
    
### API-based Headless CMS

An API-based headless CMS does store your data, which can then be accessed by the web site, mobile app or other application via an API. Because content in API-based headless CMS is not tied to physical files, they generally are able to more easily handle reuse of content objects than a git-based CMS.

**API-based CMS**:

* Sanity
* Contentful
* DatoCMS
    