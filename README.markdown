# Aplicação de Gerenciamento de Pessoas

Este projeto consiste em uma WebAPI backend construída com ASP.NET Core e uma aplicação frontend construída com Angular 17, integrada com Angular Material para componentes de interface do usuário.

## Pré-requisitos
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI 17](https://angular.io/cli) (`npm install -g @angular/cli@17`)

## Estrutura do Projeto
- `backend/PessoasApi/`: WebAPI ASP.NET Core
- `frontend/pessoas-app/`: Frontend Angular 17

## Instruções de Configuração

### Backend (ASP.NET Core WebAPI)
1. Navegue até a pasta do backend:
   ```bash
   cd backend/PessoasApi
   ```
2. Restaure as dependências:
   ```bash
   dotnet restore
   ```
3. Execute a API:
   ```bash
   dotnet run
   ```
   - A API estará disponível em `https://localhost:5001` ou `http://localhost:5000`.
   - Acesse o endpoint `/api/pessoas` para verificar os dados mockados.

### Frontend (Angular 17)
1. Navegue até a pasta do frontend:
   ```bash
   cd frontend/pessoas-app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a aplicação Angular:
   ```bash
   ng serve
   ```
   - A aplicação estará disponível em `http://localhost:4200`.

## Uso
1. Inicie a API backend primeiro (`dotnet run` na pasta `backend/PessoasApi`).
2. Inicie a aplicação frontend (`ng serve` na pasta `frontend/pessoas-app`).
3. Abra `http://localhost:4200` no seu navegador.
4. Clique no botão "Carregar Dados" para buscar os dados da API.
5. Use o campo de filtro para pesquisar por nome.
6. Navegue pelas páginas usando os controles de paginação.

## Observações
- O backend usa um conjunto de dados mockado com 30 registros.
- O frontend utiliza Angular Material para a tabela e paginação.
- O CORS está configurado no backend para permitir requisições de `http://localhost:4200`.
- Não é necessário um banco de dados externo.