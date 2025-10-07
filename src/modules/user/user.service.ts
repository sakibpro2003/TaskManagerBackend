import { config } from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const registerUser = async (userData: TUser) => {
  const { email, password } = userData;
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists!");

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ ...userData, password: hashed });
  const token = jwt.sign({ id: user._id }, config.jwtsecret!, {
    expiresIn: "7d",
  });

  return {token};
};

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Password do not match");

  const token = jwt.sign({ id: user._id }, config.jwtsecret!, {
    expiresIn: "7d",
  });
  return {token};
};

export const userServices = {
  registerUser,loginUser
};
