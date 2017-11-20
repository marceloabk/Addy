# <img src="https://github.com/Addy-Smart-Addresses/Addy/blob/master/img/logo.png" alt="Addy" height="42" width="42"></img>   Addy
O Addy é uma aplicação que tenta melhorar o sistema de endereçamento do mundo. Ele gera
um código alfanumérico de 8 caracteres baseados na latitude e longitude de qualquer posição
no globo.

## Integrantes

    Marcelo Cristiano - 13/0143901
    Indiara Duarte - 14/0022325

## Links para os serviços de deploy e CI

O deploy do Addy foi feito via github pages em um repositório separado:

    https://github.com/marceloabk/addy-web
    https://marceloabk.github.io/addy-web/

A integração e deploy continuo foram feitos via travis:

    https://travis-ci.org/marceloabk/Addy

## Links adicionais

O pack do projeto foi feito via npm e pode ser encontrado no repositório do npm:

    https://www.npmjs.com/package/addy

## Executando o projeto

A imagem a seguir representa a proposta feita para o trabalho final da disciplina:

<center><img src="https://raw.githubusercontent.com/marceloabk/Addy/entrega_final_gcs/readme_assets/proposta.jpg" alt="Addy"></img></center>

### CI

O CI utilizado foi o travis. Ele tem como script o coala como ferramenta de lintter e o mocha como ferramenta de teste.

Ele é executado em todo pull request e em toda atualização de branch mas somente se existe o .trvis.yml.

Ele também executa o deploy continuo. Toda vez que a branch travis é atualizada ele dispara o trigger de deploy e envia a pasta "src/build" para o repositório "marceloabk/addy-web" que é onde está configurado o github pages.

### ENV

Para ambiente foi escolhido o Docker. O Dockerfile cria um ambiente com a base na última imagem disponível para node.js e com todas as dependências do projeto (package.json, gulp, mocha).

O docker-compose levanta dois containers. Uma versão de desenvolvimento na porta 8000 e um que simula a versão de produção na porta 8001.

Tendo o docker e o docker-compose instalados, só é necessário rodar o seguinte comando:

    docker-compose up --build

A versão de desenvolvimento só será atualizada se buildar a imagem. A versão de desenvolvimento é atualizada com os arquivos do host.

### Build

O build roda automaticamente junto com o docker-compose. Para rodar de maneira separada:

    cd src/
    gulp

O gulp irá minimizar os *.js, *.css, *.html e também vai tentar otimizar as imagens do projeto.

O gulp também tem uma task para o webpack, que se caso existissem mais arquivos javascript no projeto, ele juntaria todos em um arquivo só chamado script.js.

### Pack

O pack foi feito via npm. Para utilizado apenas rode:

    npm init
    npm install addy

Ela irá gerar um node_modules e o Addy estará dentro desse node_modules.
