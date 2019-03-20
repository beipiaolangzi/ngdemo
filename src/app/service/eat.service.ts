import { Injectable, EventEmitter } from '@angular/core';
// 引入EventEmitter并将其实例化
@Injectable({
  providedIn: 'root'
})
export class EatService {
  public change: EventEmitter<number>;
  constructor() {
    this.change = new EventEmitter();
  }
}
