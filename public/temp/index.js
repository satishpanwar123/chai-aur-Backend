//import mongoose from "mongoose";

//import {DB_NAME} from "./db";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: './config.env'
})



connectDB ();