import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created Successfully',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};