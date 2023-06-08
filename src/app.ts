import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHadler'

const app: Application = express()

app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application api
app.use('/api/v1/users/', router)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(400, 'Ore baba Error')
//   next('Ore baba Error') //erorr
// })

//global error handler
app.use(globalErrorHandler)
export default app
