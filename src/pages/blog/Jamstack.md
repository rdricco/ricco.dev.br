---
title: O que é JAMStack?
published: "2020-07-06T21:36:59.459Z"
author: Renato Ricco
summary: |
  #### JAMStack ou _JavaScript, APIs e Markup Stack_ é uma nova mudança de paradigma na forma de desenvolver aplicativos da web rápidos..
layout: blog
draft: false
category: "blog"
tags:
  - arquitetura
---

# {title}

JAMStack ou _JavaScript, APIs e Markup Stack_ é uma nova mudança de paradigma na forma de desenvolver aplicativos web rápidos. JAMStack já existe há algum tempo mas a rápida evolução recente dos Geradores de Sites Estáticos levaram o JAMStack a ser uma das escolhas de stack favoritas de muitos desenvolvedores.

## O que é JAMStack?

JAMStack é um conjunto de tecnologias, fluxo de trabalho e forma de construir sites onde o comportamento dinâmico é fornecido por JavaScript, os dados são alimentados apenas por APIs e a marcação fornece a estrutura / espaço reservado necessários para o conteúdo que pode ser estático ou dinâmico.

>     A ideia principal é que a marcação estática sempre será mais rápida do que a marcação gerada dinamicamente pelo servidor

Portanto, serviremos primeiro o conteúdo estático e usaremos JavaScript para adicionar conteúdo dinâmico por meio da API.

Uma variação muito comum é o SSR (Server Side Rendering), onde para o conteúdo dinâmico geramos páginas estáticas de antemão. Quando um cliente solicitar a página, entregaremos o conteúdo estático e atualizamos os dados novamente através do JavaScript da página combinado com a marcação.

### Beneficios

**Ultra rápido**: como a etapa de geração de conteúdo pelo servidor não é mais dinamica, ela pode ser removida. Dessa forma, as páginas solicitadas podem ser entregues assim que o servidor encontrar o conteúdo já pronto pra ser entregue.

**Baixo custo de servidor**: O custo do servidor é baixo, pois não gastamos tempo e recursos do servidor para gerar a marcação dinamicamente a cada visita.

**Back-ends para front-end (BFF)**: Agora o back-end pode se concentrar em atender às necessidades do front-end com APIs ao invés de gastar energia cuidando do que será exibido.

**Melhor cache**: Como o conteúdo estático tem menos probabilidade de mudar, o cache pode ser mais extenso para acelerar a entrega de conteúdo. A idade do conteúdo em cache pode ser mais longa.

**Aproveitamento de CDN**: CDN (Content Delivery Networks) pode ser aproveitado para fornecer a marcação estática também e não apenas para os arquivos de mídia.

### Problemas

Da mesma forma que existem ótimos benefícios, também há algumas dificuldades que precisam ser resolvidas ao escolher trabalhar com JAMStack:

- **TTI ou Time to Interactive**: Mais [TTI](https://web.dev/tti/) s podem ser uma grande dor de cabeça se o JS não tiver um bom desempenho ou não for agrupado de forma otimizada.

- **Otimização**: A entrega de JavaScript e CSS precisa ser otimizada e existem ferramentas para fazer isso automaticamente, mas a responsabilidade em adotar é dos desenvolvedores.

- **JS Parsing Overhead**: Como toda a dinâmica é movida para JS, o usuário tem que esperar que o JS torne a página funcional e pronta para uso, e o tempo de análise do JS é outro gargalo. Para evitar isso, o JS entregue aos clientes deve ser otimizado, pequeno em tamanho e deve conter apenas as peças que serão necessárias imediatamente.

- **SEO**: SEO não é um grande problema pois os Crawlers podem executar o JS necessário - embora seja uma etapa extra para os rastreadores executarem. SSR e Snapshots HTML podem corrigir esse problema mas esta é uma etapa extra para a construção do site.

## Como usar _"JAMStack"_?

Como dito anteriormente, JAMStack é compsoto principalmente por três partes:

- JavaScript
- APIs
- Markup

A marcação é sempre HTML e o JavaScript sempre estará lá para adicionar interatividade a página. Cada API é um desafio totalmente diferente entre si mas vamos considerar que a maioria delas segue as práticas recomendadas.

### Ferramentas e Fluxo de Publicação

A publicação de um site JAMStack é feita de forma modular e tem 3 categorias/etapas principais:



#### CMS (Content Management System)

CMS é o local onde gerenciaremos o conteúdo de uma aplicação web. Isso não é necessário para todos os sites JAMStack, embora nos sites em que a API se destina ao conteúdo a escolha do CMS seja uma parte crucial.

Para que um CMS funcione bem com JAMStack, ele deve ser capaz de ser executado em modo _headless_, ou seja, separado do front-end do site. Com um CMS Headless ganhamos uma maior flexibilidade na forma de publicar nosso conteúdo, que - agora servido por API - pode ser o mesmo em diversas midias diferentes - Sites, Apps, etc - alimentados pelo mesmo CMS.

Algumas das escolhas populares são:

- [Netlify CMS](https://www.netlifycms.org/)
- [Contentful](https://www.contentful.com/)
- [Ghost](https://ghost.org/)
- [Wordpress](https://br.wordpress.org/) (Headless Mode)
- Mais headless CMS em [headlesscms](https://headlesscms.org/)

#### SSG (Static Site Generators)

SSGs são as ferramentas responsáveis pela geração da das páginas estáticas. Existem SSGs que utilizam as mais variadas linguagens de programção ou que são otimizadas para certos fins como criação de blogs, landing pages, sites de documentação, etc.

Alguns dos geradores mais usados são:

- [Next.js](https://nextjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Hugo](https://gohugo.io/)
- [Nuxt](https://nuxtjs.org/)
- [Jekyll](https://jekyllrb.com/)
- [Sapper](https://sapper.svelte.dev/)
- Mais geradores em [staticgen](https://www.staticgen.com/)

#### Build e Deploy

As tarefas de Build e Deploy também são conhecidas como CI (Continuous Integration) e CD (Continuous Deployment). É na etapa de Build que os SSGs mencionados irão gerar as páginas para em seguida publicá-las no servidor. Nessa etapa também são executados testes automatizados a procura de erros ou inconsistencias, esses testes podem prevenir a publicação de uma atualização problemática ou apontar pontos de melhoria.

Ferramentas CI / CD populares no mercado:

- [Azure DevOps](https://azure.microsoft.com/pt-br/services/devops/)
- [BitBucket pipelines](https://bitbucket.org/product/br/features/pipelines)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Github Actions](https://github.com/features/actions)
- [Gitlab CI/CD](https://docs.gitlab.com/12.10/ee/ci/)

## Conclusão

JAMStack é muito rápido quando feito corretamente. E há muitas opções para se construir uma solução rápida com JAMStack onde as vantagens são muito grandes em relação a modelos mais tradicionais.
