import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent  {

  @Output() sendData = new EventEmitter<string>();
   

  clicked(data)
  {
    this.sendData.emit(data )
  }

}
