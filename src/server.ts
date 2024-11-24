import *  as dotenv from 'dotenv'
import express from 'express'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json())

app.use('/api', routes)

app.get('/teste_endpoint', (req, res) => {
    res.send("Olá! Você está na tela de teste de endpoint! :)")
})

app.listen(PORT, () => {
    console.log(`🔥 | Servidor rodando em http://localhost:${PORT}`)
})
