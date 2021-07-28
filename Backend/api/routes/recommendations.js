const express = require('express');
const router= express.Router();
const edbconn=require('../../connection')
const rdbconn=require('../../rdbconnection')
const request = require('request');


router.get('/:userId',(req,res,next)=>{
    const id=req.params.userId;

    const options ={
        url:'http://127.0.0.1:5000/getrecommendations/'+"UID"+id,
        json: true
    };

    usersarray="";
    request.get(options,(error,resp,body)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("1",body);
        let ratingsarr=[];
        for(x in body){
            // console.log(body[x]);
            rdbconn.query("SELECT * from ratings where userid = ?",[body[x]],(error,rows,fields)=>{
                if(!error){
                    if(rows){
                        for(var i=0; i <rows.length; i++){
                            // const rating={
                            //     "companyid":rows[i].companyid,
                            //     "rating":rows[i].rating
                            // }
                            if(rows[i].rating >3){
                                ratingsarr.push(rows[i].companyid);
                            }
                           
                        }

                        // console.log(ratingsarr);
                    }
                }
            });
            console.log("2",ratingsarr);
        }
        setTimeout(()=>{
            var uniqueArray=[];

            for(var value of ratingsarr){
                // console.log("value :",value);
                if(uniqueArray.indexOf(value)===-1){
                    // console.log("inside if");
                    var str=String(value)
                    var newstr=str.substr(3);
                    var companyId=parseInt(newstr);
                    uniqueArray.push(companyId);
                }
            }
            var  queryData=[uniqueArray];
            console.log("array:",queryData);

            edbconn.query("SELECT * from company where companyid in (?)",queryData, (err,rows,fields)=>{
                if(!err){
                    console.log(rows);
                    res.status(200).send(rows);
                }
                else{
                    console.log(err);
                }
            })
            // console.log(uniqueArray);
            // res.status(200).json({
            //     message:'similaer users',
            //     users:uniqueArray
            // });
        },1000);
    });


});


module.exports=router;