import { Router, Request, Response } from "express";
import protectToken from "../middleware/auth_middleware.js";
import { STATUS_CODES } from "../constants/constants.js";

const router = Router();

router.get("/auth/me", protectToken, (req: Request, res: Response) => {
  if (!req.user) {
    res.status(STATUS_CODES.UNAUTHORIZED).json({
      success: false,
      message: "This is a protected route, you are unauthenticated",
    });
    return;
  }
  res.json({ success: true, userId: req.user.id });
});

export default router;
