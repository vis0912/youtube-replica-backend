import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB  from "./db/index.js";
import {app} from '../src/app.js';

dotenv.config({
    path: "./env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
      console.log(`App listening at http://localhost:${process.env.PORT || 8000}`);
    })
  })
  .catch((err)=>{
    console.log("Mongo Connection FAILED!!",err);
    process.exit(1);
  })