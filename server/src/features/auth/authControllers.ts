import { Controller } from "../../utils/typeHelpers.js";

const refresh: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}
const register: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}
const login: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}
const logout: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}


const authControl = {
    refresh,
    register,
    login,
    logout
}

export{
    authControl
}