import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-shop-child',
  templateUrl: './shop-child.component.html',
  styleUrls: ['./shop-child.component.css']
})
export class ShopChildComponent implements OnInit {
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();
  // 若逻辑中遇到@Output来修饰,则表示其后面的值是一个向外输出的对象
  // 这句话的意思是,通过实例化EventEmitter(), 定义了一个对外输出的对象  输出类型是个数值类型
  public num = 0;
  constructor() {
    setInterval(() => {
     this.changeNumber.emit(++this.num);
    }, 1000);
  }
  ngOnInit() {
  }
}
