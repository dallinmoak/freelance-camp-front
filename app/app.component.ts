import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: `
  <h1>navigation</h1>
  <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title: 'Freelance Bootcamp Dashboard';
}