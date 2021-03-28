import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';




@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class EnquiryFormComponent implements OnInit {

  @Input() item:any;
  img_url:string='';
  modalDisplay:boolean = false;
  images:string[] = [];
  successMessage:string = "";
  errorMessage:string = "";

  //Form Group

  enquiryForm = new FormGroup({
    name: new FormControl('',Validators.required),
    emailId: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    message: new FormControl('',Validators.required),
  });


  constructor(private service:AppService) { 
    
  }

  ngOnInit(): void {
    this.img_url = this.item.img;
    this.images = this.item.images;
  }

  changeImage(imgPath:string):void {
    this.img_url = imgPath;
  }

  showModal():void{
    console.log("Show Modal Called");
    
    this.modalDisplay = true;
  }

  hideModal():void {
    console.log("Hide Modal Called");
    this.modalDisplay = false;
    
  }
  submitForm():void {
    
    this.successMessage = ""
    this.errorMessage = "";
    let userDetails = {
      name: this.enquiryForm.controls.name.value,
      email: this.enquiryForm.controls.emailId.value,
      phone: this.enquiryForm.controls.mobile.value,
      message: this.enquiryForm.controls.message.value
    };
    let response = this.service.enquiry(userDetails);

    response ? this.successMessage = "Thanks for Contacting us. We will call you back soon." : this.errorMessage = "Sorry! Submission Failed Please Try Again!";
    
  }

}
