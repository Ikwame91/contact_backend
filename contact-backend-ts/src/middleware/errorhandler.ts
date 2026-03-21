import { NextFunction, Response, Request } from "express";
import { STATUS_CODES } from "../constants/constants.js";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const message =
    err instanceof Error ? err.message : "An unexperceted server error";
  console.error(err instanceof Error ? err.stack : err);

  res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    success: false,
    message,
  });
};

export default errorHandler;
