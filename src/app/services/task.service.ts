import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'; //for observables/async functionality
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<Task> { 
    return this.http.post<Task>(this.apiUrl, task, httpOptions); //need to pass in httpOptions when adding data because we need the headers
  }

  //call to backend
  getTasks(): Observable<Task[]> {

    /* 
    const tasks = of(TASKS); //the async call
    return tasks;
    */

    return this.http.get<Task[]>(this.apiUrl); //returns task list using http get

  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

}
