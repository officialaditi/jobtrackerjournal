import mongoose from "mongoose";


const connectDB = async() => {
        try{
                const conn = await mongoose.connect(process.env.MONGODB_URL);
                console.log('Database connected successfully....'.bgMagenta);

        }catch(err){
                console.log(`Database connection Error..`.bgRed, err);
                process.exit(1);
        }
}

export default connectDB;