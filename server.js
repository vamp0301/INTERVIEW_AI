require("dotenv").config();  
const app=require("./src/app")
const connectToDB = require("./src/config/database")


connectToDB()
app.listen(3005,()=>{
    console.log("Server is running on Port 3005")
})