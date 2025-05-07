# Notas de estudo

## Sobre o NEST JS

ideal para construir API REST, úteis para o back end

Estas notas são baseadas na documentação do NEST JS
# Este documento destina-se as minhas anotações de aprendizado

- npm -> instala pacotes
- npx -> executa executavésis de pacotes

## instalar NEST JS

```
nest new project-name
```
gerar arquivos:
```
nest g <schematic> <name> [options]
```
OBS: schematic são modules, controllers, services, mais informações, acesse aqui: https://docs.nestjs.com/cli/usages

## formatadores 
```
# Lint and autofix with eslint
npm run lint

# Format with prettier
npm run format
```

CLI -> interface de linha de comando, é uma interface que permite interação com um software apenas por texto.

o NestJS possui uma CLI opinativa que auxilia no desenvolvimento automatizando muitos processos

## Prisma
instalar o Prisma:
```
npm install prisma --save-dev
```}
menu prisma:
```
npx prisma
```

fazer migrações:
```
npx prisma migrate dev --name init
```

instalar cliente do prisma
```npm install @prisma/client
```

## Encriptar
```
npm i bcrypt
npm i -D @types/bcrypt
```

## API
Componentes de uma API Web

| Componente      | Descrição                                         |
| --------------- | ------------------------------------------------- |
| **Endpoint**    | URL que representa um recurso (ex: `/users`)      |
| **Método HTTP** | Ação a ser tomada: `GET`, `POST`, `PUT`, `DELETE` |
| **Headers**     | Informações extras (ex: autenticação)             |
| **Body**        | Conteúdo enviado em requisições `POST/PUT`        |
| **Status Code** | Resposta da API (ex: `200 OK`, `404 Not Found`)   |

Glossário: 
collection - conjunto de requisições HTTP

OBS:
quando utilizar no controller em metodo HTTP um parametro dinamico no mesmo nivel de rota não se pode utilizar mais estatico, tem que criar mais níveis.
 ex: @Get(:id) e @Get('rotaNivel1')
 vai dar erro vai achar que a rota estática é um valor a ser inserido na dinamica
 o certo é criar uma subrota, ou algo assim.

## Prática do NEST

service e controllers tem que ser referenciados nos modulos de suas pastas e o modulo referencia no app.module.ts

importante que modulos conversem entre si, com export e import, ex: database.module e user.module

### analogias com django
service: views.py, contém a lógica
controller é o urls.py, faz as requisitos HTTP, por rotas
module: é o __init__, porém mais sofisticado, ele agrupa o controller e o service