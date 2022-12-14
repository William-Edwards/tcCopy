import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sidebarOpen = false;

  constructor() { }

  ngOnInit(): void { }

  sideBarToggler() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
