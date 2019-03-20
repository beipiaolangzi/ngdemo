import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public i: any = 0;
  constructor(private myservice: MyserviceService) {
    setInterval(() => {
      myservice.i++;
      this.i = myservice.i;
    }, 1000);
  }
  ngOnInit() {
  }

}
