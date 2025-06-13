# Projeto de Autenticação JWT com Spring Boot

Este é um projeto de demonstração que implementa autenticação JWT (JSON Web Token) usando Spring Boot, Spring Security e JPA.

## Funcionalidades

- Registro de usuários
- Login com JWT
- Controle de acesso baseado em roles (ADMIN e USER)
- Endpoints protegidos
- Gerenciamento de usuários

## Requisitos

- Java 17 ou superior
- Maven
- IDE de sua preferência (recomendado: IntelliJ IDEA ou Eclipse)

## Configuração

1. Clone o repositório
2. Abra o projeto em sua IDE
3. Execute o projeto usando Maven:
   ```bash
   mvn spring-boot:run
   ```

## Endpoints da API

### Autenticação

- `POST /api/auth/register` - Registro de novo usuário
  ```json
  {
    "name": "Nome do Usuário",
    "email": "usuario@email.com",
    "password": "senha123",
    "role": "ROLE_USER" // opcional, padrão é ROLE_USER
  }
  ```

- `POST /api/auth/login` - Login
  ```json
  {
    "email": "usuario@email.com",
    "password": "senha123"
  }
  ```

### Usuários

- `GET /api/users/me` - Obter dados do usuário atual
- `GET /api/users` - Listar todos os usuários (apenas ADMIN)
- `GET /api/users/{id}` - Obter usuário por ID (ADMIN ou próprio usuário)
- `DELETE /api/users/{id}` - Deletar usuário (apenas ADMIN)

## Segurança

- Todas as senhas são criptografadas usando BCrypt
- Tokens JWT são usados para autenticação
- Controle de acesso baseado em roles
- Endpoints protegidos requerem token JWT válido

## Banco de Dados

O projeto usa H2 Database em memória para demonstração. Para usar outro banco de dados:

1. Adicione a dependência do banco desejado no `pom.xml`
2. Configure as propriedades do banco em `application.properties`

## Testes

Para executar os testes:
```bash
mvn test
``` 