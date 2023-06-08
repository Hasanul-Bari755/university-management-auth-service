import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger'

async function bootstrap() {
  // try {
  //   console.log(config.database_url)
  //   app.listen(config.port, () => {
  //     console.log('test')
  //   })
  //   if (!config.database_url) {
  //     console.log('❌ No MONGO_URI found in .env file')
  //     process.exit(1)
  //   }
  //   await mongoose.connect(config.database_url)
  //   console.log(`connect succesfull`)
  // } catch (error) {
  //   console.log(error)
  // }
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')
    app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error(`Failed to connect database`, error)
  }
}

bootstrap()
