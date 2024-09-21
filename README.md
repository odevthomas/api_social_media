# Rede Social - Backend

## 🚀 Descrição

Este projeto é um backend para uma rede social simples, onde os usuários podem se registrar, autenticar, criar postagens e visualizar suas informações. Construído com Node.js e MongoDB, o sistema utiliza JSON Web Token (JWT) para autenticação e Bcrypt para o hash das senhas.

## 🔧 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** (com Mongoose)
- **JSON Web Token (JWT)**
- **Bcrypt** para segurança de senhas

## 📦 Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) ou uma instalação local do MongoDB
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)

## 📥 Instalação

1. **Clone o repositório:**

   ```bash
   git clone <URL do repositório>
   cd social_media
   ```
2. **Instale as dependências:**

   ```bash
   npm install
   ```
3. **Configuração do arquivo `.env`:**
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   MONGODB_URI=<sua_string_de_conexão>
   JWT_SECRET=<sua_chave_secreta>
   PORT=3000
   ```
4. **Inicie o servidor:**

   ```bash
   npm start
   ```

## 🗂 Estrutura do Projeto

```
social_media/
├── db.js
├── models/
│   ├── posts.js
│   └── users.js
├── routes/
│   ├── posts.js
│   └── users.js
├── middleware/
│   └── auth.js
├── server.js
└── .env
```

## 📜 Rotas da API

### Usuário

- **POST /api/register**: Cria um novo usuário.
- **POST /api/authenticate**: Autentica um usuário e retorna um token JWT.
- **GET /api/user**: Retorna as informações do usuário autenticado.

### Postagem

- **POST /api/posts**: Cria uma nova postagem.
- **DELETE /api/posts/:id**: Exclui uma postagem por ID.

## 🔒 Autenticação

Utilizamos JWT para autenticação. O token gerado durante o processo de login deve ser incluído nos cabeçalhos das requisições que requerem autenticação.

## 🛠 Testes

Utilize ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar as rotas da API. Não se esqueça de incluir o token JWT nas requisições que necessitam de autenticação.

## 🤝 Contribuição

Sinta-se à vontade para contribuir! Abra um pull request ou crie uma issue para sugestões e melhorias.

## 📄 Licença

* [ ] Este projeto é de domínio público. Sinta-se à vontade para usar e modificar conforme necessário.
