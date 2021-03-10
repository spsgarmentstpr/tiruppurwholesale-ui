import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private service:AppService, private router: Router, private route: ActivatedRoute){
    this.items = [];
    this.itemList = {
      items: this.items,
      selectedType:''
    }
    this.isNavigate = true;
  }

  ngOnInit(): void {
    this.itemList = this.service.getItems('mens');
  }

  typeSelected =(type:string):void => {
    console.log("Selected Type : ",type);
    this.itemList = this.service.getItems(type);
    this.show();
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
}