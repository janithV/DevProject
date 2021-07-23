const express = require('express');
const router= express.Router();
const conn=require('../../connection')
const cloudinary=require('cloudinary').v2;
const multer=require('multer');
const path = require('path');
const DataURIParser = require('datauri/parser');

const upload = multer({
    limits: {
      fileSize: 1000000, // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
        cb(new Error("only upload files with jpg or jpeg format."));
      }
      cb(undefined, true); // continue with upload
    },

  });

// //multer configuration
// const storage= multer.diskStorage({
//     destination : function(req,file,cb){
//         cb(null,'./uploads/');
//     },
//     filename: function(req,file,cb){
//         cb(null, file.originalname)
//     }
// });

// const fileFilter= (req,file,cb)=>{
//     if(file.mimetype==='image/jpeg' || file.mimetype ==='image/png'){
//         cb(null,true);
//     }
//     else{
//         cb(null,false);
//     }
// }

// const upload=multer({
//     storage : storage,
//     limits :{
//         fieldSize: 1024*1024*5
//     },
//     fileFilter: fileFilter
// });

//cloudinary configuration
cloudinary.config({
    cloud_name: "dxmbxbuxa",
    api_key: "574618356855273",
    api_secret: "ct4fCrlFIi4ocsZDjRda-oFZOPM"
  
  });

router.post('/addcompany',(req,res,next)=>{ 
    const company ={
        cname:req.body.cname,
        email:req.body.email,
        password:req.body.password,
        about:req.body.about,
        fb:req.body.fb,
        twitter:req.body.twitter,
        linkedin:req.body.linkedin,
        se:req.body.SoftwareEngineer,
        wd:req.body.WebDeveloper,
        fs:req.body.FullstackDeveloper,
        qa:req.body.QualityAssurance,
        mad:req.body.MobileApplication,
        ba:req.body.BusinessAnalyst,
        da:req.body.DataAnalyst,
        devops:req.body.DevOps,
        file:req.body.logo,
        url:req.body.url
    }

    conn.query("INSERT INTO company(name,email,logo,password,about,fb,twitter,linkedin,se,webdev,fsdev,qa,maddev,ba,da,devops) VALUES('"+company.cname+"','"+company.email+"','"+company.url+"','"+company.password+"','"+company.about+"','"+company.fb+"','"+company.twitter+"','"+company.linkedin+"','"+company.se+"','"+company.wd+"','"+company.fs+"','"+company.qa+"','"+company.mad+"','"+company.ba+"','"+company.da+"','"+company.devops+"')", (err,result)=>{
        if(!err){
            console.log(result.insertId);
            res.status(201).json({
                message: 'Company added',
                internid: result.insertId
            });
        }
        else{
            console.log(err);
        }
    })
    
});

router.post('/upload', upload.single('logo'), (req,res,next)=>{

    if(req.file=== null){
        return res.status(400).json({ msg: "No file is Selected to upload. Please select a file first!" })
    }

    else{
        const file =req.file;
        console.log("upload file is:", file)

        const parser = new DataURIParser();
        const extname = path.extname(req.file.originalname).toString();
        const file64= parser.format(extname,req.file.buffer);
        

        cloudinary.uploader.upload(file64.content, function (err, result) {
  
            if (err) {
        
              console.log("Error is :", err);
              return res.status(400).json({ msg: "Server Error not Uploaded" })
        
            } else {
              console.log("Result is :", res);
              console.log("response URL: ", result.url);
            return res.status(200).json({ URL: result.url })
        
            }
        
        
          });
    }

});

module.exports=router;

