import {
  Schema
} from "mongoose";

export const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: Boolean,
  created_at: {
    type: Date,
    default: Date.now
  }
});

export const profileUserSchema = new Schema({
  user: userSchema,
  photo: String,
  description: String,
})