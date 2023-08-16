import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/User.js";
import cors from 'cors'

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(cors({
  origin: "https://3d-portfolio-mern.vercel.app"
}))

app.use("/api/v1", userRouter);


app.get("/", (req, res) => {
  return res.send("Hello World");
});
