import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    $(".viewHint").on("click", function(){
      $(".hints").toggleClass("showHints hideHints");
    })
  }

  // FontAwesome Icons
  faspship = faSpaceShuttle;

  usernameshint:string[] = ["joel562","rajesh724", "simon782", "mansi.arora89", "rk.singh928"];
  passwordshint:string[] = ["joel562#","rajesh724#", "simon782#", "mansi.arora89#", "rk.singh928#"];

  // loginchecker
  // In backend, the data gets retrieved and displayed in the arrays usernames and passwords
  logincheck(uname:string, pwd:string) {
    var valid = false;

    uname = ( < HTMLTextAreaElement > (document.getElementById('username'))).value;
    pwd = (< HTMLTextAreaElement > (document.getElementById('password'))).value;
    
    let usernames:string[] = ["joel562","rajesh724", "simon782", "mansi.arora89", "rk.singh928"],
    passwords:string[] = ["joel562#","rajesh724#", "simon782#", "mansi.arora89#", "rk.singh928#"];
    
    // Pre-defined Messages to be passed as window.alert();
    var  msgloginsuccess = "Login Successful...!", msgloginfail = "Login Unsuccessful...!!";

    for(var i=0; i<usernames.length; i++)
    {
      if((uname == usernames[i]) && (pwd == passwords[i]))
      {
        valid = true;
        break;
      }
    }
    if(valid) {
      window.alert(uname+", "+msgloginsuccess);
      this.redirectLoginSuccess();
    }
    else {
      window.alert(uname+", "+msgloginfail);
      this.redirectLoginFail();
    }
  }
  
  // If Login is successful...!
  redirectLoginSuccess():void {
    this.router.navigate(['/home']);
  }

  // If Login is unsuccessful...!
  redirectLoginFail():void {
    this.router.navigate(['/login']);
  }

  showHints() { $ }

}
