import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  @Input() num: any;
  constructor() { }

  ngOnInit() {
  }
}
