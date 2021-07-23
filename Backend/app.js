const express = require('express');
const morgan= require('morgan');
const cors = require('cors');

const app = express();

const browseRoute=require('./api/routes/browse');
const internRoute=require('./api/routes/intern');
const companyRoute =require('./api/routes/company');
const authRoute=require('./api/routes/signin');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/browse',browseRoute);
app.use('/intern',internRoute);
app.use('/company',companyRoute);
app.use('/auth',authRoute);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status-=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

module.exports=app;