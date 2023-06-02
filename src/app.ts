import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'

const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application api
app.use('/api/v1/users/', router)

app.get('/', async (req: Request, res: Response) => {
  res.send('success')
})

export default app
