---
title: O que é Serverless?
published: "2020-06-29T21:36:59.459Z"
author: Renato Ricco
summary: |
  ####  O que é Serverless?
layout: blog
draft: true
category: "blog"
tags:
  - infra
---

# {title}

# Sem servidores?

Desde 2014, quando a AWS lançou o AWS Lambda e deu o pontapé inicial no movimento _serverless_, a adoção tem crescido exponencialmente para organizações de todos os tamanhos, desde start-ups de um só homem até grandes empresas globais.

Antes de olhar para os casos de uso serverless, vamos começar do básico e definir o que realmente isso significa. Embora seja óbvio, é importante esclarecer que ainda existem servidores e data centers envolvidos, no entanto, eles agora são gerenciados para você. Os provedores de nuvem (como a AWS) oferecem serviços gerenciados prontos para uso em seus próprios servidores, pelos quais eles são responsáveis em termos de segurança, provisionamento, atualizações e tudo o mais que você anteriormente era responsável em seus servidores locais.

Com isso em mente, uma boa maneira de pensar em serverless é "computação paga por uso", ou seja, quando você não está usando, não há custos. Cabe a você - o usuário - ser responsável pelo código, o que você coloca nos serviços gerenciados e como você os usa. É também o seu código que une os serviços gerenciados escolhidos para criar seu aplicativo exclusivo; as possibilidades são infinitas.

## O que exatamente é Serverless?

Você verá algumas definições de Serverless que dizem que ele fornece recursos de computação conforme a necessidade. Embora seja uma definição purista, a definição mais ampla usada com mais frequência é que é uma forma de fornecer recursos de computação de uma forma que não exige que você pense em gerenciar servidores.

## Várias formas de Serverless

### Serverless Containers

Serviços de contêiner sem servidor como [Heroku](https://www.heroku.com/), [Netlify](https://www.netlify.com/), [AWS ECS / EKS Fargate](https://aws.amazon.com/fargate/), [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine) e [Azure Kubernetes Service](https://azure.microsoft.com/pt-br/services/kubernetes-service/) fornecem um ambiente onde você pode construir um contêiner e colocá-lo em um serviço que gerencia a implantação e execução do contêiner. Você não precisa se preocupar em executar o cluster que hospeda seus servidores de controle, servidores de nó, etc., você só precisa enviar um contêiner com alguns metadados e o serviço trata do resto.

### Serverless Functions

Funções sem servidor, como [AWS Lambda](https://aws.amazon.com/lambda/), [Google Cloud Functions](https://cloud.google.com/functions) ou [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) são serviços que fornecem um ambiente onde você pode enviar um pedaço de código com uma interface específica e, posteriormente, invocar esse código.

## Serverless vs Virtual Machines

Muitas pessoas não consideram os contêineres sem servidor como verdadeiros sem servidor, porque quando você constrói e envia um contêiner, você está essencialmente agrupando um servidor inteiro em um bom pacote. Embora eu tenha a concordar que eles não são \ _ verdadeiros \ _ sem servidor, eles têm absolutamente enormes benefícios sobre a execução de uma máquina virtual completa e vantagens distintas em algumas situações sobre as funções sem servidor.

### Prós de Serverless Containers

Os contêineres sem servidor têm muitas vantagens sobre os servidores tradicionais. Aqui estão alguns deles:

- **Gerenciamento de servidor muito pequeno** - Nenhum servidor para gerenciar, corrigir ou solucionar problemas. Você ainda tem um sistema operacional dentro do contêiner mas isso pode ser uma instalação incrivelmente mínima e a área de superfície de gerenciamento é muito menor.

- **Generally stateless** – When building applications designed for containers, you’re usually building a [12-factor app](https://12factor.net/) or following a similar pattern. Your containers are [cattle, not pets](http://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/). If your container crashes, a new one is automatically fired up.

- **Easy horizontal scalability** – Nothing about a Virtual Machine is inherently limited in terms of scalability, but containers push you in a direction that allows Serverless Container services to easily scale your software as needed. Based on factors such as load, timing, and request count, your Serverless Container service can run one instance of your container or 10,000 instances of it all while transparently handling storage allocation, load balancing, routing, etc.

- **Security** – The operating system installed in a container is usually short-lived, very minimal, and sometimes read-only. It therefore provides a much smaller attack surface than a typical general purpose and long-lived server environment.

- **Source controlled environment** – Your container definition is described in a file that can be put into source control. While this is best practice in almost any situation these days, it is still a distinct advantage when compared with a traditional server environment where someone can get in and change things that make your server configurations drift.

- **Application and environment** **bundling** – You’re combining your application with the environment it is running in, and deploying that as a single unit. This way if the new version of your software uses updated libraries, operating system version, or new language version, it can all be deployed, and rolled back, as a single unit.

- **Cost** – You can easily scale your workloads up and down. While running a Serverless container might be a bit more expensive, with some providers you can make up for it in flexibility. Serverless containers usually provide you with more flexibility to slice up resources into smaller units than traditional Virtual Machine options. For instance, an EC2 T3 nano instance provides 2 vCPUs, but you can request a container with only 0.25 vCPUs.

### Prós de Serverless Functions

As funções sem servidor têm todas as vantagens dos contêineres sem servidor, mas levam isso a outro nível.

- **Virtually zero management** – You don’t need to think about the OS at all in most instances. You can just push your code up, and then run it. There’s nothing at the OS level to patch, and nothing to maintain—just push it and forget it.

- **Stateless by default** – Serverless functions force you to write your code in a stateless way, since you can’t depend on anything being left around between invocations. This allows them to easily scale, since your function can be fired up on any server without depending on local state.

- **Almost perfect horizontal scalability –** Something invokes your function, and it runs. If it is invoked once, then it runs once. If it is invoked 100,000 times, then it runs 100,000 times. Sure, there are some platform limitations that might come into play, but those are generally safeguards to keep you from accidentally spending \$10,000, rather than limitations of the platform.

- **Cost** – Serverless functions only cost money while they are executing. So if you have functions that only execute rarely, or are very bursty, you can have significant savings.

## Serverless Containers vs Serverless Functions

### Vantagens dos Serverless Containers

- **Easy migration** – If you have an existing application, it might take a bit of work, but you can get it running inside of a container.

- **Cheaper for stable workloads** – If you have a consistent workload, then it is likely that Serverless containers will be cheaper than equivalent invocations of a Serverless function.

- **Flexibility** – There are no  limits to your OS, binaries, languages, versions, etc. you literally control the entire container. Serverless function services will limit you to particular runtimes and versions. Some Serverless function services allow custom runtimes, but you will still be locked into the OS.

- **Troubleshooting** – Containers make it easy to jump in and troubleshoot what is happening in your live environment. They also allow you to run a chunk of your environment locally, which makes it easier to debug what is happening.

- **Long running tasks** – A Serverless container runs all of the time, which suits long-running tasks best. Most Serverless functions are going to have limits around how long a function can execute. For example, as of this writing, AWS Lambda has a 15-minute limit.

### Vantagens dos Serverless Functions

- **Lower cost for bursty workloads** – Serverless functions are pay-per-invocation, meaning that you only pay when your code is actually executing. This means that for workloads that don’t run very often, they can be much cheaper in comparison to typical servers or containers.

- **Fast scaling** – Serverless function services can create a new instance of your function and have it ready to serve traffic within a few seconds (sometimes with in a fraction of a second). There are certain limits to this, and you can see more discussion about those limits in the “Scaling Serverless functions” section below.

- **Fine-grained scalability** – Let’s say you have an application that consists of a few dozen different Serverless functions, and one of those functions is called 1000 times more than the other functions. That one function will be scaled independently of the rest of your functions and you don’t even have to think about it. .

### Desvantagens dos Serverless Containers

- **Heavier deployments** – Serverless containers usually require a large build step and then you have to push a several hundred megabyte container to your repository. Then you have to deploy your containers across your cluster which could take a while if you have large deployments. This turnaround time is significantly longer than pushing up a single cloud function and have it picked up and begin serving requests within a few seconds.

- **Coarse scalability** – When you deploy out a Serverless function you are really just deploying out a single function. That function could perform multiple tasks, but generally you are deploying a single-purpose function that can scale independently of all of your other functions. When you deploy a Serverless container you’re generally deploying an entire application or Microservice. All of the functionality in that application or Microservice is going to be deployed into a single container, so in order to scale it you have to spin up more instances of that container. That means the whole thing scales as a single unit. If one chunk of your application is getting hit a ton, you’ll have to scale the whole thing to increase the amount of traffic you can serve.

### Desvantagens dos Serverless Functions

- **Falta de controle** - Alguém está gerenciando os servidores nos quais seu código está sendo executado. Seu código está sendo executado em um sistema operacional, mas não aquele sobre o qual você tem controle.

- **Proprietário** - Não há padrões reais em relação às funções serverless. Por causa disso, você geralmente está escrevendo seus aplicativos serverless usando ferramentas e interfaces de um determinado provedor. Usar uma ferramenta como as funções de etapa da AWS é um forte vínculo com o fornecedor, porque para orquestrar as funções serverless não há um padrão no momento. Isso pode levá-lo mais fundo no ecossistema de um fornecedor específico e dificultar a mudança.

- **Reescrever** - Pegar um aplicativo existente e fazê-lo funcionar em uma função serverless geralmente não é uma possibilidade. Quase sempre você precisa escrever seu aplicativo do zero para aproveitar as vantagens das funções serverless.

- **Rastreabilidade** - As funções sem servidor têm os mesmos desafios dos microsserviços, mas levadas ao extremo. Rastrear uma única solicitação em seu sistema pode envolver dezenas de funções serverless. Você precisa ter certeza de que está aproveitando bem ferramentas como [AWS X-ray](https://aws.amazon.com/xray/), [Google Cloud Trace](https://cloud.google.com/trace) ou [Distributed Tracing no Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing).

- **Depuração / teste** - você pode executar uma função de nuvem com bastante facilidade em sua máquina local usando ferramentas como [Serverless](https://www.serverless.com/), [Google Function Framework](https: // nuvem .google.com / functions / docs / functions-framework) ou [AWS SAM](https://aws.amazon.com/serverless/sam/), mas obter simulações realistas pode ser um desafio porque as funções de nuvem muitas vezes se integram com ecossistemas de nuvem de formas automatizadas e proprietárias. Além disso, serviços como funções de etapa da AWS, que introduzem uma camada de orquestração entre lambdas, podem tornar ainda mais difícil depurar o que está acontecendo em um ambiente ativo.

- **Implantação** - A implantação de funções serverless pode ser um desafio, mas principalmente porque elas fornecem ferramentas (como um [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment)) que encoraja maus comportamentos. Usar a [estrutura serverless](https://www.serverless.com/) pode tornar suas implantações automatizadas e gerenciáveis mas você precisa ter certeza de fazer o esforço para configurá-lo e mantê-lo organizado, caso contrário, versionar e manter dezenas ou centenas de funções se tornarão uma verdadeira tortura.

## Lock-In de Fornecedor

Quase todas as plataformas de nuvem aproveitam todas as oportunidades para prendê-lo, e o Serverless não é exceção a isso. No entanto, o lock-in do fornecedor é mais uma preocupação com _funções serverless_ do que com _contêineres serverless_. As maneiras pelas quais as funções são chamadas, implantadas, orquestradas e alocadas dependem do provedor de nuvem que você está usando.

Existem projetos como o Knative que estão progredindo na criação de um ambiente padrão que as empresas possam usar para implantar workloads serverless, mas em geral você precisa implantar e gerenciar a própria plataforma para obter os benefícios. Isso pode anular muitas das vantagens de executar o código serverless. O objetivo era evitar a implantação da infraestrutura, certo? Devo mencionar que você pode obter suporte nativo para Knative com o Google Cloud Run e com algum esforço pode executar Knative no AWS Fargate.

## O Santo Graal da computação Serverless

O Santo Graal da computação serveless é a verdadeira computação utilitária. Ter todos os meus recursos disponíveis quando eu precisar, conforme eu precisar. Ser capaz de fazer o upload de um pedaço de código (seja uma função única ou um aplicativo inteiro) junto com um pouco de metadados e executá-lo de uma forma que permita uma escala infinita (com alguns limites de segurança). Para não ter que pensar em quanta memória, armazenamento ou computação é necessária, ele apenas descobre isso automaticamente.

## Casos de uso:

### Contruir APIs Restful

Um dos casos de uso mais populares para deixar de usar o servidor é a facilidade de construir APIs RESTful. Na AWS, as funções do Lambda juntamente com o API Gateway fornecem uma maneira perfeita de criar um endpoint escalonável que processa dados em tempo real. Sua capacidade de escalar e flutuar conforme a demanda muda, sem a necessidade de manter os servidores é, compreensivelmente, o sonho de um desenvolvedor que se tornou realidade.

Sendo capaz de configurar integrações de serviço com o API Gateway, a AWS simplificou a implementação do processamento assíncrono e de forma útil reduz a necessidade de funções adicionais do Lambda.

### Velocidade e valor de entrega maior

Embora a escalabilidade e os custos reduzidos sejam razões substanciais para não usar servidor, em última análise, o maior argumento para não usar servidor é a velocidade de desenvolvimento. A velocidade de desenvolvimento é a velocidade e o uso de todo o potencial em que você pode entregar unidades de valor adicionais, seja por meio do fornecimento de valor existente para novos clientes ou novo valor (por exemplo, novos recursos) para clientes existentes.

A eliminação do servidor fornece aos desenvolvedores um ambiente melhor para inovar, removendo algumas das tarefas cruciais mas que não agregam valor, como manutenção e provisionamento de servidor. Essa mudança de responsabilidade realinha naturalmente o foco do desenvolvedor para continuar a agregar maior desempenho de negócios e como resultado, maior receita. De acordo com a pesquisa da McKinsey\*, ferramentas de desenvolvedor de primeira classe que permitem maior produtividade, visibilidade e coordenação são os principais contribuintes para o sucesso dos negócios.

Para todas as organizações, a velocidade de desenvolvimento deve ser considerada um jogo de longa duração. Embora alguns ganhos possam ser obtidos em um curto espaço de tempo, as maiores vitórias virão do desenvolvimento planejado.

## Conclusão

Para a maioria das organizações, a execução de servidores deve ser tão importante para elas quanto a geração de sua própria energia (e sim, algumas organizações grandes precisam fazer os dois!). Com a computação serverless, seu código ainda está sendo executado em um servidor em algum lugar, apenas não em um servidor com o qual você precisa se preocupar. E esse realmente deve ser o objetivo de longo prazo para a maioria das organizações, ser capaz de simplesmente inserir um pedaço de código em um serviço e executá-lo. A computação serverless ainda não é capaz de realizar o sonho de "adicionar o código e esquecê-lo", mas estamos chegando perto.

Deixar de usar o servidor pode parecer confuso e às vezes um pouco exagerado, principalmente dependendo da maneira como sua empresa e sua infraestrutura funcionam. Dito isso, dada a velocidade de desenvolvimento e o valor comercial das ofertas serverless, mergulhar um dedo do pé na água serverless para experimentar, pode valer a pena e abrir oportunidades não consideradas de outra forma. A chave é começar pequeno e ponderado, e definir expectativas realistas sobre os resultados e a carga de trabalho para começar.

Há uma infinidade de maneiras de introduzir alguns dos benefícios em sua organização sem ir de cabeça com o serverless. As opções de nuvem híbrida estão se tornando mais comuns e de fato estão fazendo mais sentido para um número cada vez maior de organizações devido à sua flexibilidade e obtenção do melhor de tudo que existe. Encontre o melhor caso de uso que se aplica ao seu aplicativo e experimente.

A computação serverless está aqui e veio para ficar. Continuaremos a ver os serviços serverless ficando cada vez mais próximos do ideal. Mas embora o Serverless tenha definitivamente crescido, ainda temos um longo caminho a percorrer. Para realmente alcançar o ideal de computação serverless, precisamos repensar significativamente os modelos atuais de computação e segurança. Embora o desafio seja enorme, as recompensas são ainda maiores, então provavelmente chegaremos lá mais rápido do que pensamos.
