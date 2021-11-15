import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/auth.js";
import jwt from "jsonwebtoken";
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) res.status(400).send("Name is required");
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send("User already exists");
    }
    if (password.length < 6) {
      return res.status(401).send("Password length must be more than 6");
    }
    const hashPass = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: hashPass,
    });
    await user.save();
    console.log("user created ", user);
    return res.status(200).send(`user created : ${user}`);
  } catch (err) {
    console.log(err);
  }
};
export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send("User does not exist");
  }

  const checkUser = await comparePassword(password, user.password);
  if (checkUser) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //return user and tokenn to client, exclude hashedPassword
    user.password = undefined;
    //send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure : true, //only works on https
    });
    //send user as json response
    res.status(200).json(user);
  } else return res.status(400).json({ message: "Wrong Password" });
};
