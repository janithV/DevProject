const express = require('express');
const router= express.Router();
const edbconn=require('../../connection');
const rdbconn=require('../../rdbconnection');


router.post('/addreview',(req,res,next)=>{
    const review={
        companyid:req.body.companyid,
        internid:req.body.internid,
        content:req.body.review,
        rating:req.body.rating
    }

    const dataset={
        companyid:"CID"+review.companyid,
        internid:"UID"+review.internid
    }

    edbconn.query("INSERT INTO rating(review,rating,userid,companyid) VALUES('"+review.content+"','"+review.rating+"','"+review.internid+"','"+review.companyid+"')", (err,result)=>{
        if(!err){
            rdbconn.query("INSERT INTO ratings(userid,companyid,rating) VALUES('"+dataset.internid+"','"+dataset.companyid+"','"+review.rating+"')",(error,result)=>{
                console.log(result.index);
                res.status(200).json({
                    message: 'review added',
                    internid: result.index
                });
            });
        }
        else{
            console.log(err);
        }
    })
});

router.get('/getratings/:companyid',(req,res,next)=>{
    const id = req.params.companyid;

    conn.query("SELECT * from rating where companyid =?",[id], (err,rows,fields)=>{
        if(!err){
            if(rows){
                console.log(rows);
                res.status(200).send(rows);
            }
            else{
                res.status(204).json({
                    message:"No reviews found"
                });
            }
            
        }
        else{
            console.log(err);
        }
    })

});


module.exports=router;