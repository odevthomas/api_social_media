const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true, 
    lowercase: true 
  },
  senha: {
    type: String,
    required: true
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});


userSchema.pre('save', async function(next) {
  const usuario = this; 
  if (usuario.isModified('senha') || usuario.isNew) {
    try {
      const hash = await bcrypt.hash(usuario.senha, 10);
      usuario.senha = hash; 
    } catch (erro) {
      return next(erro); 
    }
  }
  next(); 
});

// Método para comparar a senha com o hash armazenado
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.senha);
};

const Utilizador = mongoose.model('User', userSchema);
module.exports = Utilizador; 
