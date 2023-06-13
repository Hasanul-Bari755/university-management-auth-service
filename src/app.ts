import express, { Application } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHadler';
import routers from './app/routes';

// import ApiError from './apierrors/Apierror'

const app: Application = express();

app.use(cors());
//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application api

app.use('/api/v1/', routers);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

//global error handler
app.use(globalErrorHandler);
export default app;
