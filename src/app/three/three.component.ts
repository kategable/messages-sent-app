import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent   {

  constructor(private readonly service: DataService) { }
   
  clicked(data)
  {
    this.service.addData(data )
  }

}
