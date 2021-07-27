const express = require('express');
const mailer = require('nodemailer');
const router= express.Router();

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'enrolld.customerservice@gmail.com',
      pass: 'enrolld@123'
    }
  });

//   router.post('/',(req,res,next)=>{
//     var emailadd= req.body.emailadd;

//     var mailOptions = {
//         from: 'enrolld.customerservice@gmail.com',
//         to: emailadd,
//         subject: 'Subscription to Newsletter',
//         text: 'hey there! \n Welcome to IBACK Entertainment. '
//       };

//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           res.status(201).json({
//               message : 'Subscribed Successfully!'
//           });
//         }
//       });
//   });

  router.post('/',(req,res,next)=>{
    const c = {
        emailadd: req.body.email,
        fname: req.body.fname,
        lname:req.body.lname,
        subject: req.body.subject,
        message: req.body.message,
    }
    
    var mailOptions = {
        from: 'enrolld.customerservice@gmail.com',
        to: c.emailadd,
        subject: c.subject,
        text: "Hey!\n \n"+c.fname +" "+c.lname+" thank you for reaching out to us! \n \nYour message: \n"+c.message+"\n\nWe will get back to you soon!"
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.status(200).json({
              message : 'Your Message Sent'
          });
        }
      });
  });

  module.exports=router;