const express = require('express');
// const userRouter = require('./routers/login');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/user');

const app = express();

app.use(express.json());

app.use('/login', authRouter);

// app.use(authController.validateToken);
app.use('/user', userRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;