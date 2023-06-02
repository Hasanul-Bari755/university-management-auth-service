import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

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
    console.log('Database connected successfully')
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(`Failed to connect database`, error)
  }
}

bootstrap()
