import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemerter,
} from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';
import ApiError from '../../../apiErrors/ApiError';

import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemerter>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },

  {
    timestamps: true,
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Academic Semester already exits!');
  }
  next();
});

export const AcademicSemester = model<IAcademicSemerter, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
