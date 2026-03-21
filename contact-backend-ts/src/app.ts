import express, {Application , Request, Response} from 'express';
import errorHandler from './middleware/errorhandler.js';
import authRoutes from './routes/auth.routes.js';

const app: Application = express();

app.use(express.json());

app.get('/api/health', (req:Request, res: Response)=>{
    res.status(200).json({
        status:"success",
        message:"Contact api logic is fully functional"
    })
})
app.use(authRoutes);
app.use(errorHandler)
export default app;
