import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent implements OnInit{
  title = 'tiruppurwholesale-app';
  itemList:any;
  items:any[];
  isNavigate:boolean;
  selectedItem:any;
  successMessage:string = "";
  errorMessage:string = "";

  enquiryForm = new FormGroup({
    name: new FormControl('',Validators.required),
    emailId: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    message: new FormControl('',Validators.required),
  });

  constructor(private service:AppService, private router: Router, private route: ActivatedRoute){
    this.items = [];
    this.itemList = {
      items: this.items,
      selectedType:''
    }
    this.isNavigate = true;
  }

  ngOnInit(): void {
    this.itemList = this.service.getItems('womens');
  }

  typeSelected =(type:string):void => {
    this.show();
    console.log("Selected Type : ",type);
    this.itemList = this.service.getItems(type);
  };

  hide(itemDetails:any) {
    this.isNavigate = false;
    this.selectedItem = itemDetails;
  }
  show() {
    this.isNavigate = true;
  }

  tiruppurwholesale_open() {
    // document.getElementById("mySidebar").style.display = "block";
    // document.getElementById("myOverlay").style.display = "block";
  }
   
  tiruppurwholesale_close() {
    // document.getElementById("mySidebar").style.display = "none";
    // document.getElementById("myOverlay").style.display = "none";
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