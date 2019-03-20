import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('userChild') userChild;
  constructor() {
    setTimeout(() => {
      this.userChild.msg = 'aaaaaaaaaaaaa';
    }, 3000);
  }
  ngOnInit() {
  }
  writeSaySay() {
    this.userChild.saysay();
  }
}
