import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task List';
  showAddTask: boolean = false;
  subscription!: Subscription;

  //runs whenever an object/component is initialized 
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  //lifecycle method
  ngOnInit(): void { }

  hasRoute(route: string) {
    return this.router.url == route;
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
