import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import {requireSignIn } from "../middlewares/authMiddleware.js";
import multer from 'multer';

// Multer storage configuration to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store uploaded files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/signup", upload.single('photo'), registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);


export default router;
