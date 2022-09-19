import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  arraydata:FormData[] = [];

  ngOnInit(): void {
    
  }

}
