import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent  {

  constructor(private readonly service: DataService) { }
  
  clicked(data)
  {
    this.service.addData(data )
  }

}
