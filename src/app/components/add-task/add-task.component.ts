import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    /* 
    below error is thrown if you don't import Task    
    //Argument of type '{ text: string; day: string; reminder: boolean; }' is not assignable to parameter of type 'Task'.
    //Type '{ text: string; day: string; reminder: boolean; }' is missing the following properties from type 'Task': type, state, source, invoke, and 4 more.ts(2345)
    */
    this.onAddTask.emit(newTask);

    //reset form
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
