import dotenv from "dotenv";
import {connectDB} from "./db/index.js"


dotenv.config({
    path:'./env'
})

connectDB().catch((error) => {
    console.log('Error connecting to the database:', error);
    process.exit(1);
  });
  console.log("hello");