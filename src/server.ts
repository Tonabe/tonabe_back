import *  as dotenv from 'dotenv'
import express from 'express'
import routes from './routes'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.use('/api', routes)

app.get('/teste_endpoint', (req, res) => {
    res.send("Olá! Você está na tela de teste de endpoint! :)")
})

app.listen(PORT, () => {
    console.log(`🔥 | Servidor rodando em http://localhost:${PORT}`)
})