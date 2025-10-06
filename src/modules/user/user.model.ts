import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";
import { timeStamp } from "console";

const userSchema = new Schema<TUser>(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<TUser>("User", userSchema);
