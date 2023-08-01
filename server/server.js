const express = require('express');
const dotenv = require('dotenv');
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

const io = require('socket.io')(8000)

io.on('connection', socket =>{
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message',({recipients, text})=>{
        recipients.forEach(recipient =>{
            const newRecipients = recipients.filter(r => r !==
                recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('receive-message',{
                recipients: newRecipients, sender: id, text
            })
        })
    })
} )






// import path from 'path';
// import {fileURLToPath} from 'url';

//configure env
dotenv.config();

//databse config
connectDB();

// // ESmodule
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use("/api/auth", authRoutes);


// //rest api
// app.use("*", function(req, res){
//   res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});


