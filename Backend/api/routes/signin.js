const express = require('express');
const router= express.Router();
const conn=require('../../connection');
const jwt = require('jsonwebtoken');

//company login
router.post('/company-login', (req,res,next)=>{

    const email=req.body.email;
    const password=req.body.password;

    console.log("Verification called");

    console.log(email);
    console.log(password);

    conn.query("SELECT * from company where email = ? AND password =? ",[email,password],(err,rows,fields)=>{
        if(!err){
           // var bool = false;
            if(rows){
                for(var i=0; i <rows.length; i++){
                    if(email === rows[i].email && password=== rows[i].password){
                        //bool=true;
                        const token =jwt.sign({
                            email:rows[i].email,
                            companyid:rows[i].companyid
                        }, 'secret'
                        
                        );
                        res.status(200).send({
                            message: "Verified",
                            CustomerID : rows[i].companyid,
                            token:token
                        });
                    }
                }
            
            }
            else{
                res.status(401).json({
                    message : "Auth failed"
                })
            }
        }
        else{
            res.status(500).json({
                message: err
            });
        }
       
    });


});

//intern login
router.post('/intern-login', (req,res,next)=>{

    const email=req.body.email;
    const password=req.body.password;

    console.log("Verification called");

    console.log(email);
    console.log(password);

    conn.query("SELECT * from intern where email = ? AND password =? ",[email,password],(err,rows,fields)=>{
        if(!err){
           // var bool = false;
            if(rows){
                for(var i=0; i <rows.length; i++){
                    if(email === rows[i].email && password=== rows[i].password){
                        //bool=true;
                        const token =jwt.sign({
                            email:rows[i].email,
                            internid:rows[i].internid
                        }, process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                        
                        )
                        res.status(200).send({
                            message: "Verified",
                            internid : rows[i].internid,
                            token:token
                        });
                    }
                }
            
            }
            else{
                res.status(401).json({
                    message : "Auth failed"
                })
            }
        }
        else{
            res.status(500).json({
                message: err
            });
        }
       
    });


});




module.exports=router;