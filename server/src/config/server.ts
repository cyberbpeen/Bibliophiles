import express from "express";
import router from "../routes/router";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable("x-powered-by");

// ROUTES
app.use("/api/v1", router);

export default app;
