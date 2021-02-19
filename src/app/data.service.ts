import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<string[]>([]);
  data$ = this.dataSubject.asObservable();
  constructor() { }

  addData(data): void{
    const d = this.dataSubject.value;
    d.push(data);
    this.dataSubject.next(d);
  }
}
