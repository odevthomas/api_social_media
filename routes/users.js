// Importar módulos necessários
const express = require('express');
const router = express.Router();
const Utilizador = require('../models/users'); 
const auth = require('../middleware/auth'); 

// Criar um novo usuário
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body; 

  try {
    // Verifica se o e-mail já está registrado
    const existingUser = await Utilizador.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ mensagem: 'Email já registrado' });
    }

    // Criar um novo usuário com os dados fornecidos
    const user = new Utilizador({ nome, email, senha });
    await user.save();

    // Retornar o novo usuário como JSON
    res.status(201).json({ id: user._id, nome: user.nome, email: user.email }); 
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensagem: 'Erro ao registrar usuário', erro: error.message });
  }
});

// Obter informações do usuário autenticado
router.get('/user', auth, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await Utilizador.findById(userId);

    if (!user) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

  
    res.json({ nome: user.nome, email: user.email });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router; 
