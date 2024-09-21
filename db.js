const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb://thmeduardo:PUqJl45824cDEM2i@cluster0-shard-0.g73tlip.mongodb.net:27017,cluster0-shard-1.g73tlip.mongodb.net:27017,cluster0-shard-2.g73tlip.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

    await mongoose.connect(uri, {

    });
    console.log('MongoDB conectado');
  } catch (erro) {
    console.error(erro.message);
    process.exit(1); 
  }
};

module.exports = connectDB; 
