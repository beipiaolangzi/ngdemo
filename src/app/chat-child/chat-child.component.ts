import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';
@Component({
  selector: 'app-chat-child',
  templateUrl: './chat-child.component.html',
  styleUrls: ['./chat-child.component.css']
})
export class ChatChildComponent implements OnInit {

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
  }

}
