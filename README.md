# API de Gerenciamento de Tarefas

API REST para gerenciamento de tarefas (mini Trello) desenvolvida com Node.js, TypeScript, Express e SQLite.

## 🚀 Tecnologias

- Node.js
- TypeScript
- Express
- TypeORM
- SQLite
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
```

## 🚀 Executando o projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## 📝 Endpoints da API

### Criar uma tarefa
```http
POST /tasks
Content-Type: application/json

{
  "title": "Minha tarefa",
  "description": "Descrição da minha tarefa"
}
```

### Listar todas as tarefas
```http
GET /tasks
```

### Atualizar status de uma tarefa
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

### Remover uma tarefa
```http
DELETE /tasks/:id
```

## 📦 Estrutura do Projeto

```
src/
├── controllers/     # Controladores da aplicação
├── models/         # Modelos de dados
├── repositories/   # Camada de acesso a dados
├── routes/         # Definição das rotas
├── services/       # Lógica de negócio
└── server.ts       # Arquivo principal
```

## 🛠️ Arquitetura

O projeto segue uma arquitetura em camadas:

- **Controller**: Responsável por receber as requisições HTTP e retornar as respostas
- **Service**: Contém a lógica de negócio da aplicação
- **Repository**: Responsável pelo acesso aos dados
- **Model**: Define a estrutura dos dados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 