import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from 'colors';
import userRoutes from './routes/userRoutes.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json());  // read the request body

app.use('/api/users', userRoutes);


app.get("/", (req, res) => {
    res.send("Api runing......");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(
        `server started on port ${port} with ${process.env.NODE_ENV} mode...`.bgYellow,
    );
});
