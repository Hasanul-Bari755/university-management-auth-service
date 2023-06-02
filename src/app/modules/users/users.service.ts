import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated increment id
  const id = await generatedUserId()

  user.id = id

  //create auto password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Faield to create user!')
  }

  return createdUser
}

export default {
  createUser,
}
