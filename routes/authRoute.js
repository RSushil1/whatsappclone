import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getProfileController,
  updateContacts,
} from "../controllers/authController.js";
import {requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/signup", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//get profile
router.get("/profile", requireSignIn, getProfileController);

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//update profile
router.post("/contacts", requireSignIn, updateContacts);


export default router;
