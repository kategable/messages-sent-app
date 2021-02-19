import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly service: DataService) {}

  title = 'messages-sent-app';
  data$ = this.service.data$;
}
