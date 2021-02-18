import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent   {

  @Output() sendData = new EventEmitter<string>();

  clicked(data)
  {
    this.sendData.emit(data )
  }

}
