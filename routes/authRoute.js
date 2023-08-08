import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getProfileController,
  updateContacts,
  getContacts,
  profilePhotoController,
  profileCoverPhotoController
} from "../controllers/authController.js";
import {requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";


//router object
const router = express.Router();


//routing
// //REGISTER || METHOD POST
// router.post("/signup", registerController);

// Route for user registration including photo upload
router.post(
  '/signup',
  formidable(),
  registerController
);

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
router.put("/profile", requireSignIn,formidable(), updateProfileController);

//update contacts
router.post("/contacts", requireSignIn, updateContacts);

//get contacts
router.get("/contacts", requireSignIn, getContacts);

//get profile-photo
router.get("/profile-photo/:uid", profilePhotoController);

//get profile-coverPhoto
router.get("/profile-coverPhoto/:uid", profileCoverPhotoController);


export default router;
