import { app } from "./app.js";
import { Express } from "express";
import { createServer, Server } from "http";
const PORT: number = 3000;

const server: Server = createServer(app);
// insert socket based server
//connect http server
server.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})