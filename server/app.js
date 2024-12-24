import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import path from 'path';

import adminRouter from './routes/adminRouter.js'
import userRouter from './routes/userRouter.js';
import questionRouter from './routes/questionRouter.js';
import sectionRoute from './routes/sectionRoute.js';

dotenv.config()

const app = express()
dotenv.config({
    path: './env'
})

// //it is for deploy build purpose
// const _dirname = path.dirname(__filename)
// const buildpath = path.join(_dirname, "../client/build")
// app.use(express.static(buildpath));
// app.get("/*", function (req, res) {
//     // app.use(express.static(buildpath));
//     res.sendFile(
//         path.join(buildpath, "../client/build/index.html"),
//         function (err) {
//             if (err) {
//                 res.status(500).send(err);
//             }
//         }
//     )
// })

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())
app.use(cookieParser())

app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/question', questionRouter)
app.use('/api/v1/section', sectionRoute)

export { app }