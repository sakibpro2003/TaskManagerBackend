import dotenv from "dotenv";
dotenv.config();
export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtsecret: process.env.JWT_SECRET,
  salt_rounds: process.env.SALT_ROUNDS,
};
