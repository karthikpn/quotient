import express from "express";
import { userRegister, userLogin } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
