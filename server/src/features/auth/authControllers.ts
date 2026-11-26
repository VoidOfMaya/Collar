import { Controller } from "../../types/controller.js"

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

const logout: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}
//Login methods
const localLogin: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}
const googleLogin: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}
const appleLogin: Controller =async (req, res, next) =>{
    try{
        res.status(200).json({message: 'authentication route "/" accessed'})
    }catch(err){
        next(err)
    }
}


const authControl = {
    refresh,
    register,
    localLogin,
    logout
}

export{
    authControl
}