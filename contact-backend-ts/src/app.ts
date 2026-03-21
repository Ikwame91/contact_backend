import express, {Application , Request, Response} from 'express';

const app: Application = express();

app.use(express.json());

app.get('/api/health', (req:Request, res: Response)=>{
    res.status(200).json({
        "status":"success",
        "message":"Contact api logic is fully functional"
    })
})

export default app;