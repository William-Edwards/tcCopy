import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
    // private alertService: 
  ) {
    // redirect to home if logged in needed
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // getter for form fields needs checking
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }


    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first()).subscribe(
        data => {
          this.router.navigate([this.returnUrl]); // return url functionalty
        },
        error => {
          //add alert
          this.loading = false;
        }

      )

  }

}
