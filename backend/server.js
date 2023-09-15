const express = require('express');
const cors = require('cors')
const app = express();
const authRouter = require('./routers/authRouter')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: ["https://swasthiksih.onrender.com/"],
    method: ['GET', 'POST'],
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())

app.use("/user", authRouter);

app.listen(5000, () =>console.log(`Server is running on port: 5000`));