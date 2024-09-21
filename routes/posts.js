const express = require('express');
const router = express.Router();
const Post = require('../models/posts'); 
const auth = require('../middleware/auth'); 

// DELETE uma postagem por ID
router.delete('/posts/:id', auth, async (req, res) => {
  try {
 
    const post = await Post.findOne({ _id: req.params.id, autor: req.user.id });
    
    if (!post) {
      return res.status(404).json({ mensagem: 'Post not found' });
    }

    // Exclua a postagem
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).json({ mensagem: 'Post deleted' }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 
