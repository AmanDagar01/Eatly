const express = require('express');
const cookieParser = require('cookie-parser');
const authrouter = require('./routes/auth.routes');




const app = express()

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authrouter);

module.exports = app;