import {Component, OnDestroy, OnInit} from '@angular/core';
import {sidebarRoutes$} from "./navbar-routes.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'task';
  routes: any[] = [];

  ngOnInit(){
    sidebarRoutes$.subscribe(state => this.routes = state);
  }

  ngOnDestroy() {
  }
}
