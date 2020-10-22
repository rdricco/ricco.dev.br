---
title: "Core Web Vitals: uma nova métrica de SEO com foco na velocidade do site"
date: "2020-10-12T23:36:59.459Z"
author: Renato Ricco
excerpt: |
  #### Experiência na página: o foco do Google em UX e velocidade
template: post
draft: false
category: "blog"
tags:
  - dev
  - tecnologia
---

# {title}

_O Google anunciou recentemente uma grande mudança por vir: o mecanismo de busca lançará um novo ranquemanto de Experiência de Página em 2021, com base no Core Web Vitals, com objetivos detalhados a serem cumpridos._

_O Relatório de velocidade no Google Search Console (recentemente renomeado como “Core Web Vitals”) está oferecendo duas novas métricas de desempenho: Mudança de layout cumulativa e Largest Contentful Paint, além do primeiro atraso de entrada. Core Web Vitals também foram implantados em ferramentas como Page Speed Insights ou Lighthouse._


## Experiência na página: o foco do Google em UX e velocidade

Em primeiro lugar, vamos falar sobre o cronograma: [o anúncio do Google](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html&usg=ALkJrhgxVjL62pkvBqr6HdK0TNPMZmW5wQ) foi publicado em 28 de maio de 2020. De acordo com o Blog da Central do webmaster do Google, a mudança não entrará em vigor antes de 2021 e o Google enviará um aviso pelo menos 6 meses antes de lançar o sinal.

Portanto, se o seu site ainda não segue as diretrizes, a boa notícia é que você ainda tem tempo para otimizar suas páginas.

De acordo com [a documentação sobre a nova “experiência da página](https://developers.google.com/search/docs/guides/page-experience&usg=ALkJrhhf_Y_l3hFc3j0ysNyOqeBzKTg4yg) ”:

_A experiência da página é um conjunto de sinais que medem como os usuários percebem a experiência de interagir com uma página da web além de seu valor de informação pura._

![](https://res.cloudinary.com/performa-web/image/upload/v1602605023/core-web-vitals-page-experience_ya3kri.png)

Uso de HTTPs, compatibilidade com dispositivos móveis, intersticiais e navegação segura já eram sinais de pesquisa documentados. A notícia é mais sobre a introdução do Core Web Vitals.

Core Web Vitals é um conjunto de métricas de desempenho que mede a experiência do usuário no mundo real para desempenho de carregamento (LCP: Maior Contentful Paint), interatividade (FID: First Input Delay) e estabilidade visual da página (CLS: Cumulative Layout Shift).

## Core Web Vitals: LCP, FID e CLS

### Largest Contentful Paint (LCP) - Desempenho de carregamento

O Largest Contentful Paint mede o tempo de renderização do maior elemento de conteúdo visível (dentro da janela de visualização, antes que o usuário role).


![](https://res.cloudinary.com/performa-web/image/upload/v1602605023/lcp-google-guidelines_ysudd4.png)

De acordo com as diretrizes do Google, suas páginas da web devem ter um LCP abaixo de 2,5 segundos, para 75% de seus visitantes pelo menos (incluindo o tráfego de desktop e móvel).


### First Input Delay (FID) - Interatividade

Atraso na primeira entrada (FID) é o atraso que um usuário experimenta ao interagir com a página pela primeira vez (exemplo: atraso para obter um feedback da página ao clicar em um elemento)

De acordo com as diretrizes do Google, suas páginas da web devem ter um FID inferior a 100 ms, para pelo menos 75% dos visitantes (incluindo tráfego de desktop e celular).

![](https://res.cloudinary.com/performa-web/image/upload/v1602605023/fid-google-guidelines_logpsk.png)


#### Tempo total de bloqueio como alternativa ao FID

Por definição, para coletar o FID, você precisa de uma interação. Portanto, você não pode medir o FID sem um usuário real interagindo com a página. Você pode coletar o Potential Máximo do FID, que é o valor máximo teórico que o FID poderia ter em qualquer momento da interação.

Ferramentas de monitoramento sintético coletam o potencial máximo de FID, mas para obter seus resultados de FID exatos, você precisa coletá-los em seu público (Search Console e Chrome UX Reports são um bom começo). O potencial máximo de FID é sua métrica para o pior cenário. 

### Cumulative Layout Shift (CLS) - Estabilidade visual

O CLS mede a soma total de todas as mudanças de layout individuais que ocorrem durante toda a vida útil da página (incluindo depois que o usuário começou a interagir com a página), levando em consideração o tamanho da área em questão e a distância da mudança. A mudança de layout esperada (mudanças após uma interação do usuário em menos de 500 ms) não são contadas.

De acordo com as diretrizes do Google, suas páginas da web devem ter um CLS abaixo de 0,1, para pelo menos 75% dos visitantes (incluindo tráfego de desktop e celular).

![](https://res.cloudinary.com/performa-web/image/upload/v1602605023/cls-google-guidelines_zwus8e.png)

## Search Console: Relatório de velocidade substituído por Core Web Vitals

Em novembro de 2019, o Speed Report foi lançado oficialmente no Search Console , oferecendo 2 métricas de desempenho: First Contentful Paint e First Input Delay.

O “Speed Report” do Search Console, agora denominado “Core Web Vitals”, é baseado no Chrome UX Report (que coleta de dados de desempenho e uso de usuários reais do Chrome).

O FCP foi abandonado e substituído pelo CLS e LCP com o lançamento do relatório Core Web Vitals. Outra mudança - e talvez mais sutil: o valor do FID não é mais o 95%, e sim 75%, refletindo assim a diretriz de ter 75% do tráfego com um FID abaixo de 100 ms.

O Cumulative Layout Shift foi coletado (com um sinalizador "experimental") desde maio de 2019 no Chrome UX Report. O First Contentful Paint foi lançado em setembro de 2019.

No final de 2019, o Lighthouse v6 já foi anunciado e o LCP estava para ser introduzido. O uso futuro do CLS também foi mencionado, mas sem detalhes. O Lighthouse v6 foi lançado e inclui o CLS. Ainda assim, a métrica não é uma grande parte da pontuação de desempenho, apenas 5%, enquanto o LCP conta como 25%.

## Experiência de página: uma mudança mais forte do que a atualização de velocidade

Pela primeira vez, o Google não está apenas promovendo a velocidade e anunciando o desempenho como um sinal de classificação, mas também definindo métricas precisas (atraso de inputs, renderização do conteúdo e mudanças cumulativas de layout), metas detalhadas (FID <100 ms, LCP <2,5 segundos e CLS <0,1) e um contexto / metodologia (medido no Chrome em seu público real, pelo menos 75% do seu tráfego deve ter uma experiência rápida, seja qual for o seu contexto - móvel ou desktop).

Ao contrário do "Speed Update" (2018) que não foi tão impactante, lembre-se de que o Page Experience e Web Core Vitals definem metas e metodologia precisas.

De acordo com outra parte da documentação do Google :

    “Core Web Vitals [...] deve ser medido por todos os proprietários de sites”.
