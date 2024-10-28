import *  as dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.get('/teste_endpoint', (req, res) => {
    res.send("Olá! Você está na tela de teste de endpoint! :)")
})

app.listen(PORT, () => {
    console.log(`🔥 | Servidor rodando em http://localhost:${PORT}`)
})