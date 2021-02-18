import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent  {

  constructor() { }
  @Output() sendData = new EventEmitter<string>();
   

  clicked(data)
  {
    this.sendData.emit(data)
  }

}
