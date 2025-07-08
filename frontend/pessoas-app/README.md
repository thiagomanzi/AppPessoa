# Pessoas App - Frontend

Este projeto é um frontend Angular 17 que consome a API de Pessoas (backend .NET). Exibe uma tabela paginada, permite filtrar por nome e carregar os dados da API.

## Pré-requisitos
- Node.js 18+
- Angular CLI 17+
- Backend .NET rodando em http://localhost:5000 (veja instruções abaixo)

## Como executar o frontend

1. Instale as dependências:

```bash
cd frontend/pessoas-app
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
ng serve
```

3. Acesse no navegador:

```
http://localhost:4200
```

## Como executar o backend (API .NET)

1. No diretório do projeto backend:

```bash
cd ../../backend/PessoasApI
```

2. Rode a API:

```bash
dotnet run --urls=http://localhost:5000
```

A API estará disponível em http://localhost:5000/api/pessoas

## Observações
- Não é necessário banco de dados real, os dados são mockados em memória.
- O filtro por nome e a paginação são feitos no frontend.
- Utilize o botão "Carregar Dados" para buscar os registros da API.

# PessoasApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
