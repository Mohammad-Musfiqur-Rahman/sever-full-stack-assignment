import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";


// mongodb+srv://musfiqrumel:<password>@cluster0.qy3n4kn.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup


const MONGODB_URL = "mongodb+srv://musfiqrumel:rj0VP4VIvZ49Ee63@cluster0.qy3n4kn.mongodb.net/tour_db?retryWrites=true&w=majority";
const port = 5000;

mongoose
    .connect(MONGODB_URL).then(() => {
        app.listen(port, () => {
            console.log(`sever running on port ${port}`)
        })
    })
    .catch((error) => console.log(`${error} did not connect`))

