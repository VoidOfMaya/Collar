import { Router, Request, Response } from "express";
import { authControl } from "./authControllers.js";

const authRouter: Router= Router();

authRouter.get('/refresh', authControl.refresh) 
authRouter.post('/register', authControl.register) 
authRouter.get('/login', authControl.localLogin) 
authRouter.get('/logout',authControl.logout )

export{
    authRouter
}