import express from "express";
import helmet from "helmet";
import compression from "compression";
import APIController from "./APIController.js";

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.headers["X-RapidAPI-Proxy-Secret"]);
    if (req.headers['X-RapidAPI-Proxy-Secret'] !== process.env.ApiProxySecret) {
        res.status(401);
    } else {
        next();
    }
});

app.use("/:palindrome", APIController.palindrome_get);
app.use("*", (req, res) => res.status(400).json({ success: false, response: 'ERROR: No palindrome supplied.' }));

export default app;