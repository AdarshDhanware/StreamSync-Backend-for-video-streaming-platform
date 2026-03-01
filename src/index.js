import {connectDB} from "./db/index.js"
import { app } from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    const PORT =process.env.PORT || 8000;
    app.listen(PORT,"0.0.0.0" ,()=>{
        console.log(`Server started at PORT ${PORT}`);
    })
})
.catch((err)=>{
    console.log(`Server creation failed ,Mongo DB connection failed : ${err}`);
})