const path = require('path');

const rootDir = require('../helpers/path');

const express = require('express');

const router = express.Router();

router.get('/users',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','users.html'));
});

module.exports = router;