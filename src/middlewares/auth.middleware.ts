import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config";

export interface AuthRequest extends Request {
  user?: { id: string };
}

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const header = req.header("Authorization");
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token not found!" });
    }

    const token = header?.split(" ")[1];
    const decoded = jwt.verify(token, config.jwtsecret!);
    if (!decoded || typeof decoded !== "object" || !decoded.id) {
      return res.status(401).json({ message: "Invalid token!" });
    }
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
