const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('slash users');
    res.send('<h1>users</h1>');
});

app.use('/',(req, res, next) => {
    console.log('single slash');
    res.send('<h1>slash</h1>');
});


app.listen(3001);