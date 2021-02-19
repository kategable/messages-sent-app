import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  constructor(private readonly service: DataService) {}
  clicked(data): void {
    this.service.addData(data);
  }
}
