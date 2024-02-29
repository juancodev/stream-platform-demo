import bcrypt from "bcrypt";
import {
  User
} from "../models/user.model.js";

export const createUser = async (data) => {
  const password = await bcrypt.hash(data.password, 10);
  const userData = {
    ...data,
    password: password
  }
  const newUser = await User.create(userData);
  return newUser;
}

export const listUsers = async () => {
  const Users = await User.find();
  return Users;
}