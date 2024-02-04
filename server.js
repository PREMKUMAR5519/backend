const express = require("express")
const mongoose=require("mongoose")
const authRoutes = require("./routes/authRoutes")
const PersonalDetail = require("./routes/personalDetail")
const Reports = require("./routes/reports")
const cors = require("cors")

require("dotenv").config()
const app = express()
app.use(express.json())
//connect to mongoose //mongodb://127.0.0.1:27017/fitness
const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://prem551969:Prem551969@fitnessapp.tomgeha.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log("connected to mongoDB")

};
connectDB()
app.use(cors())
app.use("/auth", authRoutes)
app.use("/personalDetails",PersonalDetail)
app.use("/reports",Reports)


const port = 3000;
app.listen(port, ()=> console.log("listening on port 3000"))