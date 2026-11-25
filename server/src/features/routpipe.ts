import { authRouter } from "./auth/authRouter.js";
import { Router } from "express";

const pipe={
    authRouter
}

export{
    pipe
}