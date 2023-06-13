import ApiError from '../../../apiErrors/ApiError';
import config from '../../../config';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generatedUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated increment id
  const id = await generatedUserId();

  user.id = id;

  //create auto password

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Faield to create user!');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
