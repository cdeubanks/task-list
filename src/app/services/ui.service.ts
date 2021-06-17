import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; //subjects let you pass values from one observable to another.(like broadcast or emit?)

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {
  }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
