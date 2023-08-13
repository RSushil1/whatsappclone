import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
  getProfileController,
  updateContactsController,
  deleteContactsController,
  getContactsController,
  getChatsController,
  profilePhotoController,
  profileCoverPhotoController,
  updateChatsController
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
router.get("/profile/:uid", getProfileController);

//update profile
router.put("/profile", requireSignIn,formidable(), updateProfileController);

//create contacts
router.post("/contacts", requireSignIn, updateContactsController);

//create contacts
router.delete("/contacts/:cid", requireSignIn, deleteContactsController);

//get contacts
router.get("/contacts", requireSignIn, getContactsController);

//get profile-photo
router.get("/profile-photo/:uid", profilePhotoController);

//get profile-coverPhoto
router.get("/profile-coverPhoto/:uid", profileCoverPhotoController);

// add chat
router.post("/chats", requireSignIn, updateChatsController);

//get chats
router.get("/chats", requireSignIn, getChatsController);


export default router;
