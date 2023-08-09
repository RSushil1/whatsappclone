import userModel from "../models/userModel.js";

import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import fs from "fs";


// register user by signup
export const registerController = async (req, res) => {
  try {
    const { name,email,password,answer } = req.fields;
    const { photo } = req.files;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      answer,
    });
    if (photo) {
      user.photo.data = fs.readFileSync(photo.path);
      user.photo.contentType = photo.type;
    }
    await user.save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST Login user
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email) {
      return res.status(200).send({
        success: false,
        message: "Please enter Email!",
      });
    }
    if (!password) {
      return res.status(200).send({
        success: false,
        message: "Please enter password!",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registered! Please Sign Up",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(200).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//forgotPasswordController

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Emai is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await userModel.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// get Profile
export const getProfileController = async (req, res) => {
  try {
    const profile = await userModel.findById(req.user._id)
                                   .select("-photo")
                                   .select("-coverPhoto")
                                   .select("-chats")
                                   .select("-password");
    res.json(profile);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error While Geting profile",
      error,
    });
  }
};

//update profile
export const updateProfileController = async (req, res) => {
  try {
    const { name,password,bio } = req.fields;
    const { photo,coverPhoto } = req.files;
    const user = await userModel.findById(req.user._id);
    
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      user._id,
      {
        name: name || user.name,
        bio: bio || user.bio,
        password: hashedPassword || user.password, 
      },
      { new: true }
    );
    if (photo) {
      updatedUser.photo.data = fs.readFileSync(photo.path) || user.photo;
      updatedUser.photo.contentType = photo.type || user.photo.type;
    }
    if (coverPhoto) {
      updatedUser.coverPhoto.data = fs.readFileSync(coverPhoto.path) || user.coverPhoto;
      updatedUser.coverPhoto.contentType = coverPhoto.type || user.coverPhoto.type;
    }
    await updatedUser.save();
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

//update contacts
export const updateContacts = async (req, res) => {
  try {
    const {email} = req.body;
    const user = await userModel.findById(req.user._id);

    const adduser = await userModel.findOne({ email });
    
    if (!adduser) {
      return res.status(200).json({ success: "false", message: "contact not found" });
    }
    const id = adduser._id;
    // Add the contact to the user's contacts list
    user.contacts.push(id);
    await user.save();

    res.status(200).send({
      success: "true",
      message: "Contacts added successfully",
      user
    });
  } catch (error) {
    res.status(200).send({
      success: "false",
      message: "Error WHile Updating contacts",
      error: error.message,
    });
  }
};


// get contacts
export const getContacts = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    //Get the list of contact _ids from the user object
    const contactIds = user.contacts;

    // Find all contacts based on their _ids
    const contacts = await userModel.find({ _id: { $in: contactIds } });
    res.json(contacts);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error WHile Geting contacts",
      error,
    });
  }
};

// get photo
export const profilePhotoController = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.uid).select("photo");
    if (user.photo.data) {
      res.set("Content-type", user.photo.contentType);
      return res.status(200).send(user.photo.data);
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

// get coverPhoto
export const profileCoverPhotoController = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.uid).select("coverPhoto");
    if (user.coverPhoto.data) {
      res.set("Content-type", user.coverPhoto.contentType);
      return res.status(200).send(user.coverPhoto.data);
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erorr while getting coverPhoto",
      error,
    });
  }
};


