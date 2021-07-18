![Screenshot_40](https://user-images.githubusercontent.com/56324728/122698195-35987300-d21d-11eb-9dc5-c7cdf7550039.png)

# NLW Valoriza 🚀

## Regras

#### Cadastro de Usuário

- [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
- [x] Não é permitido cadastrar usuário sem o e-mail

#### Cadastro de Tag

- [x] Não é permitido cadastrar tag sem nome
- [x] Não é permitido cadastrar mais de uma tag com o mesmo nome
- [x] Não é permitido o cadastro por usuários que não sejam administradores

#### Cadastro de Elogios

- [x] Não é permitido um usuário cadastrar um elogio para si
- [x] Não é permitido cadastrar elogios para usuários inválidos
- [x] O usuário precisa estar autenticado na aplicação

---
## Mission: ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)

---

- O que é NodeJS ?

`
Basicamente o NodeJS é um ambiente de execução Javascript. Ele é definido como um interpretador *server-side*, ou seja, do lado do servidor no qual o código escrito é compreendido pelo servidor.
`

⬇️ **Arquitetura de funcionamento do node.js** ⬇️

![image](https://user-images.githubusercontent.com/56324728/122702157-287f8200-d225-11eb-9b6f-9096c4ba2e48.png)

- O que é uma API?

`
Primeiramente API corresponde a "Application Programming Interface", ela é como se fosse uma "ponte" que conectam uma ou mais aplicações, nada mais é do que uma forma de comunicação entre sistemas.
`

⬇️ **Arquitetura de funcionamento de uma API** ⬇️

![image](https://user-images.githubusercontent.com/56324728/122702746-69c46180-d226-11eb-8848-069e4e18f6ad.png)

- Por que usar Typescript?

`
A maior vantagem em utilizar o Typescript é a possibilidade de adicionar tipos estáticos predefinidos na aplicação, em tempo de compilação, ou seja, será possível tipar às váriaveis como number, string, boolean, object, array e também os chamados Union Types, que nos permitem a união entre dois tipos distintos para a criação de um novo.
`

- Métodos de requisição HTTP

   * GET    => Buscar (Obter) uma informação
   * POST   => Inserir (Criar) uma informação
   * PUT    => Alterar (Atualizar) uma informação
   * DELETE => Remover (Apagar) uma informação
   * PATCH  => Alterar uma informação específica

### 📌 Comandos utilizados na aula

#### Criação 🔨

`$ yarn init -y`

`$ yarn typeorm migration:create -n CreateTags`

`$ yarn typeorm migration:create -n AlterUserAddPassword`

`$ yarn typeorm migration:create -n CreateCompliments`

#### Instalação 🆕

`$ yarn add typescript -D`

`$ yarn add express`

`$ yarn add @types/express -D`

`$ yarn add ts-node-dev -D`

📝 Obs: Após a instalação do `yarn add ts-node-dev -D`, é necessário editar o arquivo **package.json** e inserir uma configuração de **scripts** conforme exibe o exemplo a seguir:

```json
  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  }
```

`$ yarn add express-async-errors`

`$ yarn add jsonwebtoken`

`$ yarn add @types/jsonwebtoken -D`

`$ yarn add bcryptj`

`$ yarn add @types/bcryptj -D`

#### Execução 🔄

`$ node index.ts`

`$ yarn tsc --init`

`$ yarn tsc`

`$ yarn dev`

`$ yarn add class-transformer`

`$ yarn add cors`

`$ yarn add @types/cors -D`
