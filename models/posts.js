const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Correto para 'User'
    required: true
  },
  titulo: { // Corrigido para 'titulo'
    type: String,
    required: true
  },
  descricao: { // Corrigido para 'descricao'
    type: String,
    required: true
  },
  criadoAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para atualizar a lista de postagens do usuário
postSchema.pre('save', async function(next) {
  try {
    await mongoose.model('User').findByIdAndUpdate(
      this.autor,
      { $push: { posts: this._id } },
      { new: true }
    );
    next(); 
  } catch (err) {
    console.error(err);
    next(err); 
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post; 
