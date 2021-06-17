import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  // '!:' avoids the 'object is possibly null' error and the 
  // 'Property 'task' has no initializer and is not definitely assigned in the constructor.' error
  // not sure how to properly handle this

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {

    this.onDeleteTask.emit(task);

  }

  onToggle(task: Task) {

    this.onToggleReminder.emit(task);

  }

}
