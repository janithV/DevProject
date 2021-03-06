const express = require('express');
const router= express.Router();
const conn=require('../../connection');
const rdbconn=require('../../rdbconnection');


router.post('/addintern',(req,res,next)=>{ 
    console.log(req)
    const user ={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        contact:req.body.contact,
        dob:req.body.dob,
        password:req.body.password,
        gender:req.body.gender,
        university:req.body.university,
        degree:req.body.degree,
        special:req.body.specialization,
        se:req.body.se,
        fe:req.body.fe,
        be:req.body.be,
        fs:req.body.fs,
        wd:req.body.wd,
        mad:req.body.mad
    }

    conn.query("INSERT INTO intern (fname,lname,email,password,dob,contact,gender,university,degree,specialization,se,fe,be,fs,wd,mad) VALUES('"+user.fname+"','"+user.lname+"','"+user.email+"','"+user.password+"','"+user.dob+"','"+user.contact+"','"+user.gender+"','"+user.university+"','"+user.degree+"','"+user.special+"','"+user.se+"','"+user.fe+"','"+user.be+"','"+user.fs+"','"+user.wd+"','"+user.mad+"')", (err,results)=>{
        if(!err){
            console.log(results.insertId);

            rdbconn.query("INSERT INTO users (userid,softwaredev,frontend,backend,fullstack,webdev,mad,degreeid) VALUES('UID"+results.insertId+"','"+user.se+"','"+user.fe+"','"+user.be+"','"+user.fs+"','"+user.wd+"','"+user.mad+"','DID02')",(error,result)=>{
                if(!error){
                    res.status(201).json({
                        message: 'Profile added',
                        internid: results.insertId
                    });
                }
                else{
                    console.log(error);
                }
                
            })

        }
        else{
            console.log(err);
        }
    })
    
});

router.get('/getintern/:internid',(req,res,next)=>{
    const id = req.params.internid;

    conn.query("SELECT * from intern where internid =?",[id], (err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.status(200).send(rows);
        }
        else{
            console.log(err);
        }
    })

});

module.exports=router;