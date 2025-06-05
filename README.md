# API de Gerenciamento de Tarefas

API REST para gerenciamento de tarefas (mini Trello) desenvolvida com Node.js, TypeScript, NestJS e SQLite.

## 🚀 Tecnologias

- Node.js
- TypeScript
- NestJS
- TypeORM
- SQLite
- JWT
- Passport
- Bcrypt
- CORS
- Dotenv

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
PORT=3000
JWT_SECRET=sua_chave_secreta_aqui
```

## 🚀 Executando o projeto

### Desenvolvimento
```bash
npm run start:dev
```

### Produção
```bash
npm run build
npm run start:prod
```

## 📝 Endpoints da API

### Autenticação

#### Registrar um novo usuário
```http
POST /auth/register
Content-Type: application/json

{
  "email": "usuario@exemplo.com",
  "password": "senha123",
  "name": "Nome do Usuário"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

### Tarefas (Endpoints Protegidos)

Para acessar os endpoints de tarefas, inclua o token JWT no header:
```
Authorization: Bearer seu_token_jwt
```

#### Criar uma tarefa
```http
POST /tasks
Content-Type: application/json

{
  "title": "Minha tarefa",
  "description": "Descrição da minha tarefa"
}
```

#### Listar todas as tarefas
```http
GET /tasks
```

#### Buscar uma tarefa específica
```http
GET /tasks/:id
```

#### Atualizar status de uma tarefa
```http
PATCH /tasks/:id/status
Content-Type: application/json

{
  "status": "in_progress"
}
```

Status válidos:
- `todo`
- `in_progress`
- `done`

#### Remover uma tarefa
```http
DELETE /tasks/:id
```

## 📦 Estrutura do Projeto

```
src/
├── controllers/     # Controladores da aplicação
├── models/         # Modelos de dados
├── services/       # Lógica de negócio
├── guards/         # Guards de autenticação
├── strategies/     # Estratégias de autenticação
├── modules/        # Módulos da aplicação
└── main.ts         # Arquivo principal
```

## 🛠️ Arquitetura

O projeto segue a arquitetura do NestJS:

- **Controller**: Responsável por receber as requisições HTTP e retornar as respostas
- **Service**: Contém a lógica de negócio da aplicação
- **Model**: Define a estrutura dos dados usando TypeORM
- **Module**: Organiza e configura os componentes da aplicação
- **Guard**: Protege rotas que necessitam de autenticação
- **Strategy**: Implementa estratégias de autenticação

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 