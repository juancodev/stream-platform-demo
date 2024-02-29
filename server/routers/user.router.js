import {
  Router
} from "express";
import {
  createUser,
  listUsers
} from "../controller/user.controller.js";

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const response = await listUsers();
    res.json(response);
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createUser(data);
    res.json(response);
  } catch (err) {
    next(err);
  }
})

export default router;