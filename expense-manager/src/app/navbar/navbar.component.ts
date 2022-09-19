import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Nav Path Property Binding to Respective Components for Routing Component
  pathLogin:string = "/login"; // Login Component
  pathRegister:string = "/register"; // Register Component

}
