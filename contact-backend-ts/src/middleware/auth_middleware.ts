import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import envConfig from "../config/env.js";
import { STATUS_CODES } from "../constants/constants.js";

type AuthTokenPayload = JwtPayload & { id: string };

const isAuthTokenPayload = (
  decoded: string | JwtPayload,
): decoded is AuthTokenPayload => {
  return (
    typeof decoded === "object" &&
    decoded !== null &&
    "id" in decoded &&
    typeof decoded.id === "string"
  );
};

const protectToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Unauthorized, no token provided",
    });
    return;
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(STATUS_CODES.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorized, no token provided",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, envConfig.JWT_SECRET);
    if (!isAuthTokenPayload(decoded)) {
      res.status(STATUS_CODES.UNAUTHORIZED).json({
        success: false,
        message: "Unauthorized, invalid token payload",
      });
      return;
    }
    req.user = { id: decoded.id };
    next();
  } catch {
    res.status(401).json({
      success: false,
      message: "Unauthorized, invalid token",
    });
  }
};
export default protectToken;
