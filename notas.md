# Sobre o NEST JS

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
```
npm install @prisma/client
```


## Prática do NEST

service tem que ser referenciados nos modulos de suas pastas e o modulo referencia no app.module.ts

Classes com @Injectable(): serviços, repositórios, helpers etc.

service: views.py, contém a lógica
controller é o urls.py, faz as requisitos HTTP, por rotas
module: é o __init__, porém mais sofisticado, ele agrupa o controller e o service

importante que modulos conversem entre si, com export e import, ex: database.module e user.module