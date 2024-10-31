import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import userRouter from './Routes/userRouter.js'
import eventRouter from './Routes/eventRouter.js'

configDotenv()


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api', userRouter)
app.use('/api',eventRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})