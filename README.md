# smartmei-challenge-graphql

Aplicação que disponibiliza um serviço em GraphQL para consultar a Taxa de Transferência de um Plano Profissional da Smart MEI.
O serviço implementa um "crawler" para buscar estes dados no site da Smart MEI e após consumir uma API de cotação monetária poderá retornar seus valores em Reais, Dólares (EUA) ou Euros. 

## Instalando a aplicação

1. Clonar este repositório.
2. Dentro do diretório do projeto, rodar `npm install` 
3. Após a instalação das dependências, executar `npm test` para rodar os testes ou `npm start` para iniciar a aplicação.
4. Navegar para `http://localhost:4000/`, onde o playground GraphQL estará rodando.

## Considerações

- Este é meu primeiro contato com GraphQL. Busquei entender seu conceito e implementar as boas práticas para eficiência e boa leitura do código.
- A aplicação usa o "Apollo Server", uma biblioteca NodeJS que implementa o GraphQL e pode ser facilmente usado com outras tecnologias como "Express" por exemplo, que permitiria o uso de hooks e a possibilidade de termos endpoints RESTful em nossa aplicação.
- Testes feitos com o uso do "Mocha" e "Chai". O primeiro, usado para a construção dos testes e, o segundo, dispondo de ferramentas de validações e comparações de dados no ambiente NodeJS

## Escopo original do desafio

Desenvolver um serviço GraphQL que disponibilize a seguinte funcionalidade:

    - fazer um crawler para buscar o valor atual de uma Transferência do Plano Profissional no site da SmartMei (https://www.smartmei.com.br)

    - chamar uma API aberta que converta esse preço para USD (dolar americano) e EUR (Euro)

    - retornar as seguintes informacoes:

        . data da consulta

        . descricao da tarifa (como está no site da smartmei)

        . valor em R$

        . valor em USD

        . valor em EUR

    - como parâmetro de entrada, receber o endereço do site da SmartMei (obrigatório)

    - uma sugestão de API de cotação de moedas é https://exchangeratesapi.io (o candidato pode usar essa ou outra se preferir)

    - o candidato pode usar qualquer lib em NodeJS ou Golang que implemente o GraphQL

    - o projeto final precisa ter o Playground habilitado

    - Fazer ao menos um cenário de teste unitário (o framework é livre)

    - O projeto deve ser feito em NodeJS (js ou typescript) ou Golang. A escolha é do candidato
