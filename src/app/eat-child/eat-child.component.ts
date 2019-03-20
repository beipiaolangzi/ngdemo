import { Component, OnInit } from '@angular/core';
import { EatService } from '../service/eat.service';

@Component({
  selector: 'app-eat-child',
  templateUrl: './eat-child.component.html',
  styleUrls: ['./eat-child.component.css']
})
export class EatChildComponent implements OnInit {
  public num: any = 0;
  constructor(public eatService: EatService) {
     eatService.change.subscribe((data: number) => {
      this.num = data;
     });
  }
  ngOnInit() {
  }
}
