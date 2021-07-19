const express = require('express');
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling get to browse'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling post to browse'
    });
});

router.get('/:companyId',(req,res,next)=>{
    const id=req.params.companyId;
    res.status(200).json({
        message:'company found',
        ID:id
    });
});

module.exports=router;