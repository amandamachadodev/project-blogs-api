const express = require('express');
// const userRouter = require('./routers/login');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/user');
const categoryRouter = require('./routers/category');

const app = express();

app.use(express.json());

app.use('/login', authRouter);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;