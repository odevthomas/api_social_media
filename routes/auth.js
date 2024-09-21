const express = require('express');
const jwt = require('jsonwebtoken');
const Utilizador = require('../models/users');
const bcrypt = require("bcrypt");
const router = express.Router();

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;


  if (!email) {
    return res.status(400).json({ mensagem: '"email" é obrigatório' });
  }


  if (!password) {
    return res.status(400).json({ mensagem: '"senha" é obrigatória' });
  }

  const user = await Utilizador.findOne({ email });

  if (!user) {
    return res.status(401).json({ mensagem: 'Email ou senha incorretos' });
  }

  const validPassword = await bcrypt.compare(password, user.senha);

  if (!validPassword) {
    return res.status(401).json({ mensagem: 'Email ou senha incorretos' });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.json({ token });
});

module.exports = router;
