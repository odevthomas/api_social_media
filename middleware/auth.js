const jwt = require('jsonwebtoken');
const Utilizador = require('../models/users');

module.exports = async function(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ mensagem: 'Unauthorized' });
  }

  // Extrai o token do cabeçalho
  const token = req.headers.authorization.split(' ')[1];

  // Verifica se o token existe
  if (!token) {
    return res.status(401).json({ mensagem: 'Unauthorized' });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Busca o usuário pelo ID decodificado
    const utilizador = await Utilizador.findById(decoded.userId);

    // Verifica se o usuário existe
    if (!utilizador) {
      return res.status(404).json({ mensagem: 'Usuário não existe' });
    }

    // Adiciona as informações do usuário ao objeto de solicitação
    req.user = utilizador;

    // Chama a próxima função de middleware
    next();
  } catch (err) {
    res.status(401).json({ mensagem: 'Token inválido' });
  }
};
