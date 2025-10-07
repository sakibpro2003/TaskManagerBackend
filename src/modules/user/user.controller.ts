import type { Request, Response } from "express";
import { userServices } from "./user.service";
const register = async (req: Request, res: Response) => {
  try {
    const result = await userServices.registerUser(req.body);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await userServices.loginUser(email, password);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(401).json({ message: err.message });
  }
};

export const userControllers = {
  register,
  login,
};
