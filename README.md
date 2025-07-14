# 🧠 Rede Social - Backend

![media](https://github.com/user-attachments/assets/343e5fb5-55b7-4cc0-9a6c-ec98b20153ab)

## 📌 Descrição do Projeto

Este é o backend de uma rede social simples, desenvolvido com foco em aprendizado de autenticação, persistência de dados e segurança com tokens.

A API permite que usuários se registrem, façam login com JWT, publiquem postagens e gerenciem suas informações. Utiliza **Node.js + Express**, **MongoDB com Mongoose** e bibliotecas essenciais como **JWT** e **Bcrypt** para segurança de senhas.

📦 Ideal como base para construir um front-end futuramente ou integrar com um app mobile.

---

## 🚀 Por que este projeto?

A proposta foi **simular a estrutura de uma rede social funcional**, com ênfase em:

- **Boas práticas de segurança e autenticação**
- Estrutura REST simples e clara
- Modularização do backend com controllers, rotas e middleware

💬 Este projeto foi pensado para ser simples, funcional e escalável.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – runtime JavaScript no servidor
- **Express.js** – framework leve para rotas e middleware
- **MongoDB** – banco NoSQL flexível
- **Mongoose** – ODM para mapear objetos JS no MongoDB
- **Bcrypt** – hash seguro de senhas
- **JWT (JSON Web Token)** – autenticação via token

---

## 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js (v14+)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou MongoDB local

---

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/social-media-backend.git
cd social_media
````

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com:

```
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco
JWT_SECRET=sua_chave_secreta
PORT=3000
```

4. Inicie o servidor:

```bash
npm start
```

---

## 📂 Estrutura do Projeto

```
social_media/
├── db.js                    # Conexão com MongoDB
├── models/                 # Modelos Mongoose (User, Post)
│   ├── posts.js
│   └── users.js
├── routes/                 # Rotas para usuários e postagens
│   ├── posts.js
│   └── users.js
├── middleware/             # Middleware de autenticação (JWT)
│   └── auth.js
├── server.js               # Arquivo principal da aplicação
└── .env                    # Variáveis de ambiente
```

---

## 🌐 Rotas da API

### 👤 Usuário

| Método | Rota                | Descrição                       |
| ------ | ------------------- | ------------------------------- |
| POST   | `/api/register`     | Registra um novo usuário        |
| POST   | `/api/authenticate` | Faz login e retorna um JWT      |
| GET    | `/api/user`         | Retorna dados do usuário logado |

### 📝 Postagem

| Método | Rota             | Descrição                   |
| ------ | ---------------- | --------------------------- |
| POST   | `/api/posts`     | Cria uma nova postagem      |
| DELETE | `/api/posts/:id` | Deleta uma postagem pelo ID |

---

## 🔐 Autenticação com JWT

Após fazer login via `/api/authenticate`, o servidor retorna um **token JWT**.
Esse token deve ser incluído no header das requisições protegidas:

```
Authorization: Bearer <seu_token>
```

---

## 🧪 Testando com Postman ou Insomnia

1. Faça o login e copie o token retornado
2. Nas requisições protegidas, adicione o token no header
3. Teste rotas como:

   * POST `/api/posts`
   * GET `/api/user`
   * DELETE `/api/posts/:id`

---

## 🤝 Contribuindo

Sinta-se à vontade para contribuir!

```bash
# Fork o repositório
# Crie uma branch
git checkout -b minha-feature

# Faça commit
git commit -m 'feat: adicionando endpoint de comentários'

# Push e pull request
```

---

## 📜 Licença

Este projeto está sob domínio público.
Use, estude e modifique como quiser!

---

## ✉️ Contato

Desenvolvido por **Thomas Eduardo**
🔗 [thomaseduardo.online](https://thomaseduardo.online)
📧 [thmedu@outlook.com](mailto:thmedu@outlook.com)
📱 (19) 9 9904-2072

---

🔧 Projeto prático com Node.js e MongoDB para fins de estudo e portfólio.

```

