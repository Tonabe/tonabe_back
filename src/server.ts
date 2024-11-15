import *  as dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
from cors im

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json())

app.use('/api', routes)

app.use(cors())

app.get('/teste_endpoint', (req, res) => {
    res.send("Olá! Você está na tela de teste de endpoint! :)")
})

app.listen(PORT, () => {
    console.log(`🔥 | Servidor rodando em http://localhost:${PORT}`)
})
