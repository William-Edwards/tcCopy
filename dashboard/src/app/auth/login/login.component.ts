import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading!: false;

  constructor(
    private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    // private authenticationservice:
    // private alertService: 
  ) {
    // redirect to home if logged in needed
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

  }

  resetPassword() {

  }

}
