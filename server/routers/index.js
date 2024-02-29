import {
  Router
} from "express";
import users from "./user.router.js";

const router = Router();

export const RouterAPI = (app) => {
  app.use('/api/v1', router);
  router.use('/users', users);
}