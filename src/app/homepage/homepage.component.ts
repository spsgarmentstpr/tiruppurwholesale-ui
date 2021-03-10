import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HomepageComponent implements OnInit {

  @Input() itemList:any;
  items:any;
  selected:boolean;

  @Output() hideEvent = new EventEmitter<void>();

  constructor(private service : AppService, private router: Router, private route: ActivatedRoute) { 
    this.items = this.itemList && this.itemList.items;
    this.selected = false;
  }

  ngOnInit(): void {
    this.items = this.itemList && this.itemList.items;
    console.log(this.itemList);
    console.log(this.itemList.items);
    console.log(this.items);
    
  }
  ngOnChanges(): void {
    // this.updateValues();
    console.log(this.itemList);
    console.log(this.itemList.items);
  }

  updateValues():void {
    this.items = this.service.getCategories();
    if(this.itemList.selectedType){
      this.selected = true;
    }else{
      this.selected = false;
    }
  }

  renderEnquiryForm = (item:any):void => {
    this.hideEvent.emit(item);
    console.log("Navigate to enquiry form");
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
