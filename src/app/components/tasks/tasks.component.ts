import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { //'void' means the method doesn't return anything

    //this.tasks = this.taskService.getTasks(); //ideally this would use observables instead of just importing from a file.

    //Type 'Observable<Task[]>' is missing the following properties from type 'Task[]': length, pop, push, concat, and 25 more.ts(2740)
    //the above code throws this error once getTasks() it changed to an observable and basically means that we are not using it correctly.
    //correct syntax below
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks); //similar to a promise and using .then()

  }

  //add task to db and push task item to main tasks list
  addTask(task: Task) {

    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));

  }

  //posts delete request to api passing in the task's id. filters the deleted task from the rest of the list.
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ));
  }

  //sets task's reminder value to opposite of its current value and updates the task in the db
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
