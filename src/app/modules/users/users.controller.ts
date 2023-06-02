import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      sucess: true,
      data: result,
      message: 'create user successfullt',
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}

export default {
  createUser,
}
