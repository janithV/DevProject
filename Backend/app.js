const express = require('express');
const morgan= require('morgan');
const cors = require('cors');

const app = express();

const browseRoute=require('./api/routes/browse');

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers',"Origin, X-Requested-With, Content-Type, Accept, Authorization");

//     if (req.method==='OPTIONS'){
//         res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//         return res.status(200).json({});
//     }
//     next();
// });

app.use('/browse',browseRoute);

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