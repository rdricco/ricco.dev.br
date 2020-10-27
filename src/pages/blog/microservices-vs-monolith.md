---
title: Arquitetura Monolítica vs Microsserviços
published: "2020-06-22T21:36:59.459Z"
author: Renato Ricco
summary: |
  #### Monolitos vs Microsserviços
layout: blog
draft: false
category: "blog"
tags:
  - arquitetura
---

# {title}

A evolução das tecnologias mudou a maneira como construímos a arquitetura de aplicativos. Os serviços _Docker_, _Cloud_ e _Container Orchestration_ nos trouxeram a capacidade de desenvolver soluções distribuídas, mais escalonáveis e confiáveis. Neste artigo, compararemos microsserviços e arquitetura monolítica, discutiremos quais equipes e projetos devem usar que tipo de arquitetura e exploraremos suas vantagens e desvantagens.

De relance, a diferença entre esses tipos pode ser ilustrada assim

![microservices vs monolith](https://res.cloudinary.com/practicaldev/image/fetch/s--seen3BGm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/2697570/49395813-cd094980-f737-11e8-9e9a-6c20db5720c4.jpg)
_*Não é estritamente verdade que os aplicativos monoliticos sejam sempre simples_


Vamos discutir os prós e os contras de cada um, ponto por ponto.

**Desdobramento, desenvolvimento**

Os aplicativos Monoliticos permitem que você defina sua implantação uma vez e em seguida, simplesmente ajuste-a com base nas mudanças em andamento. Ao mesmo tempo no entanto, se houver apenas um único ponto de falha durante a implantação e tudo der errado, você interrompe todo o projeto.

Os microsserviços exigem muito mais trabalh, você precisará implantar cada microsserviço independentemente, se preocupar com as ferramentas de orquestração e tentar unificar o formato de seus pipelines CI/CD para reduzir a quantidade de tempo necessária para fazê-lo para cada novo microsserviço. Há um lado bom entretanto, se algo der errado, você quebrará apenas um pequeno microsserviço que é menos problemático do que o projeto inteiro. Também é muito mais fácil reverter um pequeno microsserviço do que um aplicativo inteiro.

**Manutenção**

Se você planeja usar uma arquitetura de microsserviços, obtenha um DevOps para sua equipe. Nem todo desenvolvedor estará familiarizado com o Docker ou com ferramentas de orquestração, como Kubernetes, Docker Swarm, Mesosphere ou qualquer ferramenta semelhante que possa ajudá-lo a gerenciar a infraestrutura com muitas partes móveis. Alguém precisa monitorar e manter o estado de funcionamento de sua configuração de CI para cada microsserviço e toda a infraestrutura.

**Confiabilidade**

A arquitetura de microsserviços é a vencedora óbvia aqui. A interrupção de um microsserviço afeta apenas uma parte e causa problemas para os clientes que o usam, mas para ninguém mais. Se, por exemplo, você estiver criando um aplicativo bancário e o microsserviço responsável pela retirada de dinheiro estiver inativo, isso é definitivamente menos sério do que todo o aplicativo sendo forçado a parar.

**Escalabilidade**

Para escalabilidade, microsserviços são mais adequados. Os aplicativos monolitico são difíceis de escalar porque, mesmo se você executar mais trabalhadores, cada trabalhador estará no projeto único e completo, uma forma ineficiente de usar recursos. Pior, você pode escrever seu código de uma maneira que torne impossível dimensioná-lo horizontalmente, deixando apenas o dimensionamento vertical possível para seu aplicativo monolitico. Com microsserviços, isso é muito mais fácil. Os recursos podem ser usados com mais cuidado e permitem dimensionar apenas as partes que exigem mais recursos.

**Custo**

O custo é difícil de calcular porque a arquitetura de monólito é mais barata em alguns cenários, mas não em outros. Por exemplo, com a melhor escalabilidade de microsserviços, você poderia configurar uma escala automática e só pagar por isso quando o volume de usuários realmente exigir mais recursos. Ao mesmo tempo, para manter essa infraestrutura funcionando, você precisa de um devops que precisa ser pago. Com um pequeno aplicativo monolitico, você pode rodar em um host de $5 ~ $20 e ativar snapshots. Com um aplicativo monolitico maior, você pode hospedar uma instância muito cara porque não pode compartilhá-la em vários hosts pequenos e baratos.


**Desenvolvimento**

Em um de meus projetos pessoais, tenho 22 microsserviços e posso dizer por experiência própria que pode ser complicado lidar com isso. A melhor maneira de lidar com esses microsserviços foi criar um arquivo docker-compose e desde o início desenvolvê-lo por meio do Docker. Isso ajuda a reduzir o tempo gasto na migração e compartilhamento do código; simplesmente execute o sistema do zero e inicie todos os microsserviços conforme necessário. Abrir dezenas de janelas de terminal e executar comandos para iniciar cada serviço individualmente seria uma tremenda dor de cabeça.

Por outro lado. quando você desenvolve um microsserviço, pode ter um caso em que não precisa executar outras partes do aplicativo. Isso resulta em menos problemas com conflitos git devido ao melhor processo de decomposição de tarefas e a capacidade de isolar os desenvolvedores em microsserviços.

Fazer revisão de código e controle de qualidade é mais simples com microsserviços; você pode até escrever microsserviços em diferentes linguagens de programação.

**Lançando Versões**

Os microsserviços que são menores e com uma arquitetura adequada de comunicação de microsserviços permitem que você libere novos recursos mais rapidamente, reduzindo o tempo de controle de qualidade, tempo de compilação e tempo de execução de testes. Os aplicativos monoliticos têm muitas dependências internas que não podem ser quebradas. Há também um risco maior de que algo com o qual você está comprometido possa depender de alterações não concluídas dos membros da equipe responsável, o que pode adiar os lançamentos.

#### Qual modelo de arquitetura é o melhor?

Use a arquitetura monolitica se você:

- precisa construir uma versão MVP de um novo produto
- tem experiência de desenvolvimento em frameworks sólidos, como Ruby on Rails, Laravel, etc.
- não veja gargalos de desempenho para algumas funcionalidades principais de seu projeto

Lembre-se de que, se você descobrir que há necessidade de microsserviços em seu projeto, a arquitetura monolitica sempre corre o risco de quebrar como resultado desses pequenos microsserviços.

Use a arquitetura de microsserviços se você:

- não tem um prazo super apertado; microsserviços exigem que você pesquise e planeje a arquitetura para garantir que funcione
- tem uma equipe com conhecimento em linguagens de programação variadas
- se preocupa muito com a escalabilidade e confiabilidade de seu produto
- tem interação entre diferentes departamentos de desenvolvimento (talvez até em diferentes países / fusos horários)
- tem um aplicativo monolitico existente e vê problemas em partes que podem ser divididas em vários microsserviços
