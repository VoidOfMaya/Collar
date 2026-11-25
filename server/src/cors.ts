import { CorsOptions } from "cors";

const clientUrl = process.env.CLIENT_URL;

if( process.env.NODE_ENV === 'production' && !clientUrl){
    throw new Error('Production environamnet  requires a client_url')
}

const allowedOrigins: string[] =
    process.env.NODE_ENV === "production"
        ? [clientUrl!]
        : [
            "http://localhost:5173",
            "http://localhost:4173",
        ];
const corsOpts: CorsOptions = {
  origin: allowedOrigins,
  credentials: true, 
}

export{
    corsOpts
}