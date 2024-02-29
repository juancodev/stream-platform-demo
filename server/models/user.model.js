import {
  model
} from "mongoose";
import {
  userSchema,
  profileUserSchema
} from "../schemas/user.schema.js";
export const User = model('User', userSchema);
export const ProfileUser = model('Profile', profileUserSchema);