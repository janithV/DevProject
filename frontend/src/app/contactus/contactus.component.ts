import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactUsService } from './contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private service:ContactUsService) { }

  @ViewChild('form') contactUsForm:NgForm;
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  ngOnInit(): void {
  }

  onSubmit(){
    this.swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Your are about to send an Email!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, send email!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const email=this.contactUsForm.value.email;
        const fname=this.contactUsForm.value.fname;
        const lname=this.contactUsForm.value.lname;
        const subject=this.contactUsForm.value.subject;
        const message=this.contactUsForm.value.content;
        
        this.service.emailService(email,fname,lname,subject,message).subscribe(responseData=>{
          if(responseData.status==200){
            this.swalWithBootstrapButtons.fire(
              'Sent!',
              'Your email has been sent successfully',
              'success'
            )
          }
        });
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelled',
          'Email service not responding',
          'error'
        )
      }
    })
    
  }

}
