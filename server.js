const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());


const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
app.use('/api', userRouter);
app.use('/api', postRouter);

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});

module.exports = app; 
