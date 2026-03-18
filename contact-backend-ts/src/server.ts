import app from './app.js';
import env from './config/env.js';
import connectDb from  './config/db.js';
import { start } from 'node:repl';

const StartServer = async(): Promise<void> =>{
    try {
        await connectDb();

app.listen(env.PORT,()=>{
    console.log(`server is running on port ${env.PORT}`)
})

    } catch (error:unknown) {
        console.error("Failed to start server: ", error instanceof Error ? error.message : error);
        process.exit(1);
        
    }}

    StartServer();