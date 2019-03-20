import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public num: any = 1;
  constructor() { }
  ngOnInit() {
  }
  changenumber(data) {
    this.num = data;
  }
}
