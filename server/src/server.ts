import { app } from "./app.js";
import { Express } from "express";
import { createServer, Server } from "http";
const PORT: number = 3000;

const server: Server = createServer(app);

//connect http server
server.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})