# Banco Imobiliário

[![node version](https://img.shields.io/node/v/react)](https://img.shields.io/node/v/react)

Simulador do jogo banco imibiliário

## Requisitos de instalação

- npm >= 6.0.0
- node >= 14.15.1
- mysql >= 5.7
- docker >= 23.0.1
- docker-compose >= 1.29.2

## Como utilizar
<br>

### Configurações

1.  Crie um arquivo .env na raiz do projeto, seguindo os parâmetros do arquivo .env.example



<br>

### Executando projeto

#### Execute o comando para instalações de dependências:

```
yarn

ou

npm i
```

#### Para executar a migration
```
yarn db:dev:migrations

ou

npm run db:dev:migrations
```

#### Para adicionar os valores default no banco
```
yarn db:dev:seeders

ou 

npm run db:dev:seeders
```



#### Para rodar o projeto
```
yarn dev


ou

npm run dev
```
### Caso queira rodar o banco de dados via docker
```
yarn db:dev:up

ou

npm run db:dev:up
```

