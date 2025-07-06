import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: "16kb" }));


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

import userRouter from './routers/user.router.js';

app.use("/api", userRouter);





export {app}