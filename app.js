import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/User.js";
import cors from 'cors'

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors({
  origin: "localhost:3000"
}))

app.use("/api/v1", userRouter);


app.get("/", (req, res) => {
  return res.send("Hello World");
});
