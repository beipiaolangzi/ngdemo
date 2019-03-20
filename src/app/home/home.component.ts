import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public num: any = 0;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setInterval(() => {
      this.num = this.num += 1;
    }, 1000);
  }
}
