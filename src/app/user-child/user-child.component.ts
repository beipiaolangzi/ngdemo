import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {
  public msg = '这是在子组件定义的信息';
  constructor() { }
  ngOnInit() {
  }
  saysay() {
    alert('你想要写一篇说说吗');
  }
}
