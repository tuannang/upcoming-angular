import { Component } from '@angular/core';

import {projects} from './mock-projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  projects = projects;
}
