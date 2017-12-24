import { Component, OnInit } from '@angular/core';

import { projects } from '../mock-projects';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projects = projects;

  constructor() { }

  ngOnInit() {
  }

}
