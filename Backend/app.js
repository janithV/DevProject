const express = require('express');

const app = express();

const browseRoute=require('./api/routes/browse');

app.use('/browse',browseRoute);

module.exports=app;