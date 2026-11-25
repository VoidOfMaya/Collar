import express, {Application, Request, Response, NextFunction} from 'express';
import { corsOpts } from './cors.js';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';

const app: Application = express();

//task: set cors
app.use(cors(corsOpts));

app.use(express.json()); //=> parse request.string into a json object
app.use(express.urlencoded({extended: true}));//=> Enable URL-encoded form data parsing

//passport setup
//task call passport config midlleware 
app.use(passport.initialize());

//parse cookies
app.use(cookieParser(/*inserte a 32byte hex string cryptographic api key here*/));

//API ENDPOINT:-
app.get("/health", (req: Request, res: Response)=>{
    console.log("Health endpoint active");
    const health :string = "ok"
    res.status(200).json({healthStat : health})
})

//error handler:
//404
app.use((req: Request, res: Response, next: NextFunction)=>{

  const error: Error = new Error("not found");
  
  res.status(500).json({message: "something went wrong"})
})

//export app for testing
export{
    app
}