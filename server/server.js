const express = require('express');
const app = express();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const port = process.env.PORT || 3001;
app.use(xss())
app.use(mongoSanitize())

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})