import express from "express";
import morganlogger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const handleHome = (req, res) => res.send("hello from home!");

const handleProfile = (req, res) => res.send("you are dead");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(helmet());
app.use(morganlogger("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

export default app;