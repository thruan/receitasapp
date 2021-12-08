const express = require('express')
const app = express();

app.get('/', (req,res) => {
    return res.status(200).json({
        mensagem: 'Rota de tipo GET com endereço'
    })
})

app.listen(5000, () => {
    console.log('servidor criado para porta 5000')
})