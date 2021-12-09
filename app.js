const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

app.use(cors());
app.use(express.json());

// importar models
const users = require('./models/user.model')

mongoose.connect('mongodb://localhost:27017/Cookmaster', {
    //opções
}).then(() => {
    console.log('Conectado com sucesso ao banco de dados')   
}).catch((err) => {
    console.log(err)
});

app.get('/', (req,res) => {
    return res.status(200).json({
        mensagem: 'Rota de tipo GET com endereço',
        data: '08/12/2021',
        author: 'Anthony Ruan',
        location: 'Senai, Imperatriz-MA'
    })
});

app.post('/novoUsuario', (req,res) => {
    const {name, email, password, role} = req.body;
    console.log(name, email, password, role);
    
    return res.status(201).json({
        mensagem: 'Usuário cadastrado com sucesso'
    })
})

app.listen(5000, () => {
    console.log('servidor criado para porta 5000')
})