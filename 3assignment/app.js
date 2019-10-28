const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

const usersRoutes = require('./routes/users');
const mainRoutes = require('./routes/main');

app.use(usersRoutes);
app.use(mainRoutes);

app.listen(3000);