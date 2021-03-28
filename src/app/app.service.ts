import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ITEMS from './item_details'


let header = new HttpHeaders();

header.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})


export class AppService {

  constructor(private http: HttpClient) { }


  enquiry(userDetails:any):any{
    return this.http.post('http://tiruppurwholesale.com:8080/userdetails',userDetails).subscribe(obj => true);
    
  }

  getCategories():any[] {
    let allCategories = [
      {
        type:'Mens',
        img:'https://th.bing.com/th/id/OIP.7tRDPHI_FsWcySskzXvknQHaLH?w=182&h=273&c=7&o=5&pid=1.7'
      },
      {
        type:'Womens',
        img:'https://th.bing.com/th/id/OIP.wv3g1QWAKKCMbZm8hdlBhgHaJ4?w=182&h=243&c=7&o=5&pid=1.7'
      },
      {
        type:'Boys',
        img:'https://th.bing.com/th/id/OIP.d5Tsqxum1FdYmAjtQVHcgAHaKl?w=182&h=260&c=7&o=5&pid=1.7'
      },
      {
        type:'Girls',
        img:'https://th.bing.com/th/id/OIP.CNIEwMmLgcS3xstv2laXswHaKl?w=182&h=260&c=7&o=5&pid=1.7'
      },
      {
        type:'Kids',
        img:'https://th.bing.com/th/id/OIP.GpnJj-NWDno5A-f7YwKswgHaE7?w=286&h=191&c=7&o=5&pid=1.7'
      }
    ];
    return allCategories;
  }
  getItems(type:string):any {
    let items_details;
    switch (type) {
      case 'mens':
        items_details = {
          type:type,
          items: ITEMS.mens
        }
        break;
      case 'womens':
        items_details = {
          type:type,
          items: ITEMS.womens
        }
        break;
        case 'boys':
        items_details = {
          type:type,
          items: ITEMS.boys
        }
        break;
        case 'girls':
        items_details = {
          type:type,
          items: ITEMS.girls
        }
        break;
        case 'kids':
        items_details = {
          type:type,
          items: ITEMS.kids
        }
        break;
      default:
        items_details = {
          type:'mens',
          items: ITEMS.mens
        }
        break;
    }
    return items_details;
  }
  dummySerice() {
    this.http.get("http://192.168.0.93:8080/home").toPromise().then(data => console.log(data));
  }
}
