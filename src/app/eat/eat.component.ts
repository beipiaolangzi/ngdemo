import { Component, OnInit } from '@angular/core';
import { EatService } from '../service/eat.service';
@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.css']
})
export class EatComponent implements OnInit {
  public num: any = 0;
  constructor(eatService: EatService) {
     setInterval(() => {
        eatService.change.emit(++this.num);
     }, 1000);
  }

  ngOnInit() {
  }
}
