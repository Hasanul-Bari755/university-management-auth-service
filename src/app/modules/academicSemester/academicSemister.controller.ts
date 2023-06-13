import { academicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    // console.log(academicSemester);
    const result = await academicSemesterService.createSemester(
      academicSemester
    );

    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semerter created Successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
