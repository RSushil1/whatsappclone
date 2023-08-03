import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default: "./default.png",
    },
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    chats: [
      {
        withUser: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        messages: [
          {
            sender: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "users",
            },
            content: {
              type: String,
              required: true,
            },
            timestamp: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
