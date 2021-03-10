import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class EnquiryFormComponent implements OnInit {

  @Input() item:any;
  img_url:string='';

  constructor() { }

  ngOnInit(): void {
    this.img_url = "assets/shopimages/jeans1.jpg";
  }

  changeImage(imgPath:string):void {
    this.img_url = imgPath;
  }

}
