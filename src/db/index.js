import mongoose from "mongoose";

export const connectDB= async ()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/IRRP`);
        console.log(`MONGODB connected !! ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB CONNECTION ERROR: ",error);
        process.exit(1)
        
    }
}
// ;( async ()=>{
    
// })()
// export default connectDB;